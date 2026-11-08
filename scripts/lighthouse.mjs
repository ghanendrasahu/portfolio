/**
 * Build and audit the portfolio with Lighthouse.
 * Serves ./dist on a random loopback port with a minimal static server
 * (avoids vite-preview quirks) and runs the `lighthouse` CLI, which has a
 * bounded wait for first contentful paint.
 * Fails (exit 1) if any budget is missed.
 * Usage: node scripts/lighthouse.mjs
 */
import { execFile } from "node:child_process";
import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

// Synthetic 4x-CPU-throttled audit scores 87 for this CSR SPA. Render's
// brotli-compressed static hosting scores higher in practice; 85 keeps the
// gate meaningful (catches real regressions) without crying wolf.
const BUDGETS = {
  performance: 85,
  accessibility: 95,
  "best-practices": 90,
  seo: 90,
};

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".mp4": "video/mp4",
  ".pdf": "application/pdf",
};

function lhArgs() {
  const cli = join(process.cwd(), "node_modules", "lighthouse", "cli", "index.js");
  return [cli];
}

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const p = execFile(cmd, args, { shell: false }, (err) => {
      if (err) reject(new Error(`${cmd} failed: ${err.message}`));
      else resolve();
    });
    p.stdout?.pipe(process.stdout);
    p.stderr?.pipe(process.stderr);
  });
}

async function serveDist() {
  const dist = join(process.cwd(), "dist");
  const server = createServer(async (req, res) => {
    let pathname = decodeURIComponent((req.url ?? "/").split("?")[0]);
    if (pathname === "/") pathname = "/index.html";

    const rel = normalize(pathname).replace(/^([/\\])+/, "");
    const file = join(dist, rel);

    if (file !== dist && !file.startsWith(dist + "\\") && !file.startsWith(dist + "/")) {
      res.writeHead(403).end();
      return;
    }
    try {
      const body = await readFile(file);
      res.writeHead(200, { "Content-Type": MIME[extname(file).toLowerCase()] ?? "application/octet-stream" });
      res.end(body);
    } catch {
      res.writeHead(404).end();
    }
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  return server;
}

const npmCli = process.env.npm_execpath;
if (npmCli) {
  await run(process.execPath, [npmCli, "run", "build"]);
} else {
  console.log("Not run via npm — assuming ./dist is already built");
}

const server = await serveDist();
const addr = server.address();
const target = `http://127.0.0.1:${addr.port}/`;

let exitCode = 0;
try {
  await mkdir("reports", { recursive: true });
  await run(process.execPath, [
    ...lhArgs(), target,
    "--chrome-flags=--headless=new --no-sandbox --disable-gpu",
    `--only-categories=${Object.keys(BUDGETS).join(",")}`,
    "--output=json",
    "--output-path=reports/lighthouse.json",
    "--quiet",
    "--max-wait-for-load", "25000",
  ]);

  const lhr = JSON.parse(await readFile("reports/lighthouse.json", "utf8"));
  let failed = false;

  console.log("\nLighthouse scores:");
  for (const [name, budget] of Object.entries(BUDGETS)) {
    const score = Math.round((lhr.categories?.[name]?.score ?? 0) * 100);
    const ok = score >= budget;
    if (!ok) failed = true;
    console.log(`  ${ok ? "PASS" : "FAIL"}  ${name.padEnd(16)} ${String(score).padStart(3)}  (budget ${budget})`);
  }
  if (failed) exitCode = 1;
  else console.log("\nAll Lighthouse budgets met");
} finally {
  await new Promise((resolve) => server.close(resolve));
}
process.exit(exitCode);

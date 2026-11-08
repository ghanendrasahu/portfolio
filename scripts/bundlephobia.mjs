/**
 * Report the published (Bundlephobia) sizes of every production dependency.
 * Informational — prints a table and never fails the build.
 * Usage: node scripts/bundlephobia.mjs
 */
import { readFile } from "node:fs/promises";

const pkg = JSON.parse(await readFile("package.json", "utf8"));
const deps = Object.entries(pkg.dependencies ?? {});

const rows = [];
let totalGzip = 0;

for (const [name, spec] of deps) {
  const version = String(spec).replace(/^[^0-9]*/, "");
  const url = `https://bundlephobia.com/api/size?package=${encodeURIComponent(`${name}@${version}`)}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      rows.push({ name, version, gzip: null });
      continue;
    }
    const data = await res.json();
    const gzip = data.gzip ?? 0;
    totalGzip += gzip;
    rows.push({ name, version, gzip });
  } catch {
    rows.push({ name, version, gzip: null });
  }
}

rows.sort((a, b) => (b.gzip ?? 0) - (a.gzip ?? 0));

console.log("Bundlephobia — production dependencies (gzip)\n");
for (const row of rows) {
  const size = row.gzip === null ? "  (unreachable)" : `${(row.gzip / 1024).toFixed(2)} kB`;
  console.log(`${namePad(row.name)}${size.padStart(14)}`);
}
console.log("\n" + "-".repeat(42));
console.log(`TOTAL${String(`${(totalGzip / 1024).toFixed(2)} kB`).padStart(36)}`);

function namePad(s) {
  return s.padEnd(30);
}

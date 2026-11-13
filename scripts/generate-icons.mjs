/**
 * Generates every raster brand asset from public/brand-mark.svg.
 *
 * The mark is a single thick arc plus a crossbar, so it still reads at 16px.
 * Run with `npm run icons` after changing the vector.
 */
import { chromium } from "@playwright/test";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");

const ACCENT = "#15243b";
const INK = "#0b0d12";
const TEXT = "#e8ebf5";
const MUTED = "#9aa4b8";
const MINT = "#46d39a";
const HAIRLINE = "#2a3a52";

const markFile = await readFile(path.join(publicDir, "brand-mark.svg"), "utf8");
const markInner = markFile
  .replace(/^[\s\S]*?<svg[^>]*>/, "")
  .replace(/<\/svg>\s*$/, "")
  .trim();
// brand-mark.svg sets fill="none" on its <svg> root, and that attribute is lost
// when only the children are embedded. Without this wrapper the path falls back
// to a black fill and floods the G's counter.
const mark = `<g fill="none">${markInner}</g>`;

const shell = (body, css = "") => `<!doctype html>
<html><head><meta charset="utf-8" />
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 100%; height: 100%; }
  svg { display: block; width: 100%; height: 100%; }
  ${css}
</style></head><body>${body}</body></html>`;

/** Icon tile with the mark inset by `pad` (fraction of the tile). */
const iconHtml = (size, { radius, pad = 0, bleed = false }) =>
  shell(
    `<div style="width:${size}px;height:${size}px;background:${ACCENT};display:grid;place-items:center;${
      bleed ? "" : `border-radius:${radius}px;`
    }">
      <div style="width:${size * (1 - pad * 2)}px;height:${size * (1 - pad * 2)}px">
        <svg viewBox="0 0 64 64" fill="none">${mark}</svg>
      </div>
    </div>`
  );

const ogHtml = async () => {
  const font = await readFile(path.join(publicDir, "fonts/ibm-plex-sans-latin-wght-normal.woff2"));
  return shell(
    `<div class="card">
      <div class="badge"><svg viewBox="0 0 64 64" fill="none">${mark}</svg></div>
      <div class="copy">
        <h1>Ghanendra Sahu</h1>
        <p class="role">Data Scientist &amp; GenAI Engineer</p>
        <p class="url"><span class="dot"></span>ghanendra-portfolio.onrender.com</p>
      </div>
    </div>`,
    `@font-face {
       font-family: "IBM Plex Sans";
       src: url(data:font/woff2;base64,${font.toString("base64")}) format("woff2");
       font-weight: 100 700;
     }
     body { background: ${INK}; color: ${TEXT}; font-family: "IBM Plex Sans", "Segoe UI", sans-serif; }
     .card { width: 1200px; height: 630px; display: flex; align-items: center; gap: 64px; padding: 0 104px; }
     .badge { width: 232px; height: 232px; flex: none; background: ${ACCENT}; border: 1px solid ${HAIRLINE}; border-radius: 48px; padding: 30px; }
     h1 { font-size: 92px; font-weight: 700; letter-spacing: -0.03em; line-height: 1; }
     .role { margin-top: 22px; font-size: 38px; font-weight: 500; color: ${MUTED}; letter-spacing: -0.01em; }
     .url { margin-top: 40px; font-size: 24px; font-weight: 500; color: ${MUTED}; display: flex; align-items: center; gap: 12px; }
     .dot { width: 12px; height: 12px; border-radius: 999px; background: ${MINT}; }
     .copy { border-left: 2px solid #232b3d; padding-left: 64px; }`
  );
};

const targets = [
  { file: "icon-192.png", size: 192, opts: { radius: 42 } },
  { file: "icon-512.png", size: 512, opts: { radius: 112 } },
  { file: "apple-touch-icon.png", size: 180, opts: { radius: 0, bleed: true } },
  { file: "icon-maskable-512.png", size: 512, opts: { radius: 0, pad: 0.14, bleed: true } },
  { file: "favicon-32.png", size: 32, opts: { radius: 7 } },
];

// The tiled logo is what the header renders and what the browser tab uses,
// written from the same string so the two can never drift apart.
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${ACCENT}"/>
  ${mark}
</svg>
`;

for (const name of ["brand-logo.svg", "favicon.svg"]) {
  await writeFile(path.join(publicDir, name), logoSvg, "utf8");
}

const browser = await chromium
  .launch()
  .catch(() => chromium.launch({ channel: "chrome" }));
const page = await browser.newPage({ deviceScaleFactor: 1 });

for (const { file, size, opts } of targets) {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(iconHtml(size, opts));
  await page.screenshot({
    path: path.join(publicDir, file),
    clip: { x: 0, y: 0, width: size, height: size },
  });
  console.log(`${file}  ${size}x${size}`);
}

await page.setViewportSize({ width: 1200, height: 630 });
await page.setContent(await ogHtml());
await page.waitForTimeout(200);
await page.screenshot({
  path: path.join(publicDir, "og-image.png"),
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});
console.log("og-image.png  1200x630");

await browser.close();
console.log("brand-logo.svg + favicon.svg written from brand-mark.svg");

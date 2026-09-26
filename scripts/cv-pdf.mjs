// Prints the CV pages of the static export (out/) to A4 PDFs with headless Chrome or Edge.
// Run after `npm run build`. Writes public/fauzan-cv-{en,id}.pdf (to commit) and copies them into out/.
import { execFile } from "node:child_process";
import { copyFileSync, createReadStream, existsSync, statSync } from "node:fs";
import http from "node:http";
import path from "node:path";
import { promisify } from "node:util";

const OUT = path.resolve("out");
const PAGES = { en: "/cv", id: "/id/cv" };
const TYPES = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".woff2": "font/woff2",
  ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".json": "application/json",
};

const browser = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].find((p) => p && existsSync(p));

if (!existsSync(OUT)) throw new Error("out/ not found. Run `npm run build` first.");
if (!browser) throw new Error("Chrome or Edge not found. Set CHROME_PATH.");

// Minimal static server with the same lookup order as the production nginx: $uri, $uri.html, $uri/index.html.
const server = http.createServer((req, res) => {
  const url = decodeURIComponent(new URL(req.url, "http://x").pathname);
  for (const candidate of [url, `${url}.html`, path.join(url, "index.html")]) {
    const file = path.join(OUT, candidate);
    if (file.startsWith(OUT) && existsSync(file) && statSync(file).isFile()) {
      res.writeHead(200, { "content-type": TYPES[path.extname(file)] ?? "application/octet-stream" });
      return createReadStream(file).pipe(res);
    }
  }
  res.writeHead(404).end();
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const { port } = server.address();

try {
  for (const [locale, page] of Object.entries(PAGES)) {
    const target = path.resolve("public", `fauzan-cv-${locale}.pdf`);
    await promisify(execFile)(browser, [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      "--virtual-time-budget=5000",
      `--print-to-pdf=${target}`,
      `http://127.0.0.1:${port}${page}`,
    ]);
    copyFileSync(target, path.join(OUT, path.basename(target)));
    console.log(`${page} -> public/${path.basename(target)}`);
  }
} finally {
  server.close();
}

// Next.js static export on Windows writes RSC segment files into nested folders
// (out/<route>/__next.<a>/<b>/__PAGE__.txt) because the segment path keeps backslashes,
// while the client router fetches flat names (out/<route>/__next.<a>.<b>.__PAGE__.txt).
// This flattens them so prefetching works. Builds on Linux/macOS have no such folders, so it is a no-op there.
import fs from "node:fs";
import path from "node:path";

const OUT = path.resolve("out");
let moved = 0;

function flatten(segmentDir) {
  const parent = path.dirname(segmentDir);
  const files = fs.readdirSync(segmentDir, { recursive: true, withFileTypes: true }).filter((e) => e.isFile());
  for (const file of files) {
    const src = path.join(file.parentPath, file.name);
    const rel = path.relative(segmentDir, src).split(path.sep).join(".");
    fs.renameSync(src, path.join(parent, `${path.basename(segmentDir)}.${rel}`));
    moved++;
  }
  fs.rmSync(segmentDir, { recursive: true });
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name === "_next") continue;
    const full = path.join(dir, entry.name);
    if (entry.name.startsWith("__next.")) flatten(full);
    else walk(full);
  }
}

walk(OUT);
console.log(`flattened ${moved} segment files`);

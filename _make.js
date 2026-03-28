const fs = require("fs");
const path = require("path");

const SOURCE_DIR = path.join(__dirname, "..", "ofa.js", "tutorial", "website");
const TARGET_DIR = __dirname;

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log(`Start copying from ${SOURCE_DIR} to ${TARGET_DIR}...`);
copyDir(SOURCE_DIR, TARGET_DIR);
console.log("Copy completed!");

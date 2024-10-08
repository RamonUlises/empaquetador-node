import fs from "node:fs";
import path from "node:path";

export function copyFolderSync(from, to, projectName) {
  fs.mkdirSync(to, { recursive: true });

  fs.readdirSync(from).forEach((element) => {
    const stat = fs.lstatSync(path.join(from, element));
    if (stat.isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));

    } else if (stat.isDirectory()) {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}
#!/usr/bin/env node
import path from "node:path";
import { askProjectName } from "./functions/askProjectName.js";
import { copyFolderSync } from "./functions/copyFolder.js";
import { languageSelect } from "./functions/languageSelect.js";
import { utilsSelect } from "./functions/utilsSelect.js";
import { installDependencies } from "./functions/installDependencies.js";
import { updateJson } from "./functions/updateJson.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

async function main() {
  const projectName = await askProjectName();
  const language = await languageSelect();
  const util = await utilsSelect();

  const source = path.join(__dirname, `templates/${language.toLowerCase()}/${util}`);
  const destination = path.join(process.cwd(), projectName);

  copyFolderSync(source, destination, projectName);
  updateJson(destination, projectName);
  installDependencies(destination);
}

main();
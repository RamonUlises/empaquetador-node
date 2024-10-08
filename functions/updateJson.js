import path from 'node:path';
import fs from 'node:fs';

export function updateJson(destination, projectName){
  const packageJsonPath = path.join(destination, 'package.json');

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  packageJson.name = projectName;

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}
import { execSync } from "node:child_process";

export function installDependencies(destination) {
  console.log("Instalando dependencias...");
  try {
    execSync("npm install --silent", { cwd: destination, stdio: "inherit" });
    console.log("\nDependencias instaladas");
    console.log("\ncd", destination.split("/").pop());
    console.log("npm run dev");
  } catch (error) {
    console.error("Error al instalar dependencias", error);
  }
};
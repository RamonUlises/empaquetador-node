import inquirer from "inquirer";

export async function languageSelect() {
  const { language } = await inquirer.prompt([
    {
      type: "list",
      name: "language",
      message: "Seleccione el lenguaje que desea utilizar",
      choices: ["JavaScript", "TypeScript"],
    },
  ]);

  return language;
};
import inquirer from "inquirer";

export async function askProjectName() {
  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "¿Cuál es el nombre de tu proyecto?",
      validate: (input) => !!input || "Debes ingresar un nombre de proyecto",
    },
  ]);

  return projectName;
}
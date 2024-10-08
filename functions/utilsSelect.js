import inquirer from "inquirer";

export async function utilsSelect() {
  const { express } = await inquirer.prompt([
    {
      type: "list",
      name: "express",
      message: "¿Desea utilizar Express?",
      choices: ["Sí", "No"],
    },
  ]);

  const { eslint } = await inquirer.prompt([
    {
      type: "list",
      name: "eslint",
      message: "¿Desea utilizar Eslint?",
      choices: ["Sí", "No"],
    },
  ]);

  let util = "native";

  if (express === "Sí") {
    util = "express";
  }

  if (eslint === "Sí") {
    util = "eslint";
  }

  if(express === "Sí" && eslint === "Sí") {
    util = "express-eslint";
  }

  return util;
};
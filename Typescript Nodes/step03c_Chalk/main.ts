import inquirer from "inquirer";
import chalk from "chalk";


let Student_Qualification = await inquirer.prompt([{
   
    name : "info",
    type : "string",
    message : "Please enter your qualification?",

}]);

console.log(chalk.greenBright("Student_Qualification :", Student_Qualification.info));

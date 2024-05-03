import  inquirer from "inquirer";

let My_Name = await inquirer.prompt([{

    name : "name",
    type : "string",
    message : "Please enter your name?",
 
}]);

console.log("My name is : ", My_Name.name);

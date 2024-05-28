#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter Your First Number", type: "number", name: "firstNumber" },
    { message: "Enter Your second Number", type: "number", name: "secondNumber" },
    {
        message: "select one of operators to perform action",
        type: "list",
        name: "operator",
        choices: ["multiplicaion", "addition", "subtraction", "division"]
    }
]);
// CONDITIONAL STATEMENT
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    "please select write operator";
}
;

#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.blue.bold("Welcome To My Word Counter Application"));

const answers : {
    Sentence : String,
} = await inquirer.prompt(
    [
        {
        name : "Sentence",
        type : "input",
        message : "Enter Your Sentence To Count The word:"

         }
    ]
);
const words = answers.Sentence.trim().split("") 
console.log(chalk.bgGreen.bold(words));

console.log(chalk.bgGray.bold(`Your Sentence World Count is : ${words.length}`));


console.log(chalk.blue.bold("Thanks For Using My Word Counter Application"));




#! /usr/bin/env node
console.log(chalk.yellowBright.italic.underline.bold("\n🟠🟢🔵  Welcome to Object-Oriented Programming (OOP) concept  🔵🟢🟠\n"));
import chalk from "chalk";
import inquirer from 'inquirer';
function rainbowText(text) {
    const rainbowColors = [
        chalk.red.bold.italic,
        chalk.yellow.bold.italic,
        chalk.green.bold.italic,
        chalk.blue.bold.italic,
        chalk.magenta.bold.italic,
        chalk.cyan.bold.italic
    ];
    let coloredText = '';
    for (let i = 0; i < text.length; i++) {
        const color = rainbowColors[i % rainbowColors.length];
        coloredText += color(text[i]);
    }
    return coloredText;
}
class Person {
    // Properties
    name;
    age;
    education1;
    program;
    education2;
    giaic;
    future;
    // Constructor
    constructor(name, age, education1, program, education2, giaic, future) {
        this.name = name;
        this.age = age;
        this.education1 = education1;
        this.program = program;
        this.education2 = education2;
        this.giaic = giaic;
        this.future = future;
    }
    // Method
    sayHello() {
        console.log(chalk.greenBright.italic.bold(`\nHello, my name is ${this.name} and I am ${this.age} years old.`));
        console.log(chalk.greenBright.italic.bold(`\nMy education is ${this.education1} and currently I am studying IT programs from ${this.program}.`));
        console.log(chalk.greenBright.italic.bold(`\nDo you like education at Gov. House Sindh faculty? ${this.education2}.`));
        console.log(chalk.greenBright.italic.bold(`\nAre you pleased with the present IT programs at GIAIC? ${this.giaic}.`));
        console.log(chalk.greenBright.italic.bold(`\nWhat do you want to do in future? ${this.future}.`));
    }
}
// Usage
async function createPerson() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: chalk.magentaBright.italic.bold("What's your name?")
        },
        {
            type: 'number',
            name: 'age',
            message: chalk.magentaBright.italic.bold("How old are you?")
        },
        {
            type: 'input',
            name: 'education1',
            message: chalk.magentaBright.italic.bold("What education do you have?")
        },
        {
            type: 'input',
            name: 'program',
            message: chalk.magentaBright.italic.bold("Where are you now studying for IT programs?")
        },
        {
            type: 'input',
            name: 'education2',
            message: chalk.magentaBright.italic.bold("Do you like education at Gov. House Sindh faculty?, Answer   Yes / No?")
        },
        {
            type: 'input',
            name: 'giaic',
            message: chalk.magentaBright.italic.bold("Are you pleased with the present IT programs at GIAIC?, Answer   Yes / No?")
        },
        {
            type: 'input',
            name: 'future',
            message: chalk.magentaBright.italic.bold("What do you wish to do in the future?, write a small sentence.")
        }
    ]);
    const { name, age, education1, program, education2, giaic, future } = answers;
    const person = new Person(name, age, education1, program, education2, giaic, future);
    person.sayHello();
    console.log(rainbowText("\nMay Allah bless you and your family always, and best wishes for the future.\nGood luck to you."));
}
createPerson();

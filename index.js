const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");
const generateMarkDown = require("./generateMarkDown")
const questions = [
    {
        type: "input",
        message: "Please enter the name of your project",
        name: "title"
    },
    {
        type: "input",
        message: "Please Describe your project",
        name: "description"
    },
    {
        type: "input",
        message: "Please provide a step by step description on how to get the environment running",
        name: "why"
    },
    {
        type: "input",
        message: "Please Enter Usage Information",
        name: "how"
    },
    {
        type: "input",
        message: "Please list all collaborators on the project",
        name: "install"
    },
    {
        type: "list",
        message: "Please select a license",
        name: "license",
        choices: ["ISC", "MIT", "GNU", "Apache License 2.0"]
    },
    {
        type: "input",
        message: "What is the name of your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What are the contribution guidlines?",
        name: "collaborators"
    },
    {
        type: "input",
        message: "What are the testing instructions?",
        name: "tests"
    },
    {
        type: "input",
        message: "gimme your git hub username",
        name: "github"
    }
];

//use arrow function here answers is the parameter
// array of questions for user
// console.log(answers.title);
// const userEntry = `![GitHub]# ${answers.title}  \n \n ## Description \n ${answers.description} ##tableOContents *[installation](#installation) \n \n ## Installation \n ${answers.installation} \n \n ## Usage \n ${answers.usage} \n \n ## Credits \n ${answers.credit} \n \n ## Contributing \n ${answers.contributionguidelines} \n \n ## Tests \n ${answers.testing}`;
// \n Description: ${answers.description} \n Installation: ${answers.installation};







function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile("Readme.md", generateMarkDown({ ...answers }))
    })
}

// function call to initialize program
init();


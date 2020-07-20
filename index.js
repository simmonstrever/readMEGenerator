const inquirer = require('inquirer');
const fs = require("fs");
inquirer.prompt([
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
        name: "installation"
    },
    {
        type: "input",
        message: "Please Enter Usage Information",
        name: "usage"
    },
    {
        type: "input",
        message: "Please list all collaborators on the project",
        name: "credit"
    },
    // {
    //     type: "input",
    //     message: "What is the name of your repository housing your app?",
    //     name: "repo"
    // },
    {
        type: "input",
        message: "What are the contribution guidlines?",
        name: "contributionguidelines"
    },
    {
        type: "input",
        message: "What are the testing instructions?",
        name: "testing"
    }
]).then(function (answers) { //use arrow function here answers is the parameter
    // array of questions for user
    console.log(answers.title);
    const userEntry = `# ${answers.title}  \n \n ## Description \n ${answers.description} \n \n ## Installation \n ${answers.installation} \n \n ## Usage \n ${answers.usage} \n \n ## Credits \n ${answers.credit} \n \n ## Contributing \n ${answers.contributionguidelines} \n \n ## Tests \n ${answers.testing}`;
    // \n Description: ${answers.description} \n Installation: ${answers.installation};
    console.log(userEntry);

    fs.writeFile('test.md', userEntry, (err) => {
        if (err){
            return console.log(err);
        }
        console.log("we did it")
    });


// array of questions for user
// const questions = [];

// function to write README file
// function writeToFile("TestREADME.md", userEntry, (err) => ) {}

// function to initialize program
// function init() { }

// function call to initialize program
// init();

});
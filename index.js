const inquirer = require('inquirer');
const fs = require("fs");
inquirer.prompt([
    {
        type: "input",
        message: "Please enter the name of your project",
        name: "title"
    }
    // {
    //     type: "input",
    //     message: "Please Describe your project",
    //     name: "description"
    // },
    // {
    //     type: "input",
    //     message: "what is your name?",
    //     name: "author"
    // },
    // {
    //     type: "input",
    //     message: "What is the name of your repository housing your app?",
    //     name: "repo"
    // },
    // {
    //     type: "input",
    //     message: "Please provide a step by step description on how to get the environment running",
    //     name: "installation"
    // }
    // {
    //     type: "input",
    //     message: "Please Enter Usage Information",
    //     name: "usage"
    // },
    // {
    //     type: "input",
    //     message: "What are the contribution guidlines?",
    //     name: "contributionguidelines"
    // },
    // {
    //     type: "input",
    //     message: "What are the testing instructions?",
    //     name: "testing"
    // }
]).then(function (answers) {
    // array of questions for user
    console.log(answers.title);
    const userEntry = `# ${answers.title}`;
    // \n Description: ${answers.description} \n Installation: ${answers.installation};
    console.log(userEntry);

    fs.appendFile('test.md', userEntry, (err) => {
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
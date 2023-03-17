// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
inquirer.prompt ([
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
        
    },
    {
        type: "input",
        name: "description",
        message: "What is your project description?",
        
    },
    {
        type: "input",
        name: "installation",
        message: "What does the user need to know about using the repository?",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions and examples for use.",
    },
    {
        type: "input",
        name: "contribution",
        message: "If you created an application or package and would like other developers to contribute to it, please provide the guidelines for doing so."
    },
    {
        type: "list",
        name: "license",
        message: "What license would do you want to choose?",
        choices: [
            "MIT",
            "Unlicense",
            "Apache_2.0",
            "GNU_v3",
            "BSD_3-Clause",
            "Mozilla-Public-License_2.0",
            "None"
        ],
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "test",
        message: "What tests should be run, if any?",
    },

])

.then((answers) => {
    console.log(answers)
    const READMEinfo = generateREADME(answers);
    fs.writeFile('./Generated_README/README.md', READMEinfo, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
});
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

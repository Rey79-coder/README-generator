// TODO: MAKE SURE YOU INSTALLED NPM REQUIRE PKG.

const inquirer = require('inquirer');
const fs = require('fs');
// const { title } = require('process');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// function that crats the array of questions for user
function promptUser() {
    return inquirer.prompt(
    [
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
            // USE INQUIRER TO VALIDATE ANSWERS.
            validate: (value) => { if (value) { return true } else { return 'Requires title to continue' }}
        },

        {
            type: 'input',
            name: 'Description',
            message: 'Enter a brief description of the project',
            // USE INQUIRER TO VALIDATE ANSWERS.
            validate: (value) => { if (value) { return true } else { return 'Provide description to continue' }}
        },   
        
      
        {
            type: 'input',
            name: 'Installation',
            message: 'How do you install your app?',
            // USE INQUIRER TO VALIDATE ANSWERS.
            validate: (value) => { if (value) { return true } else { return 'Steps needed' }}
        },    
        
        {
            type: 'input',
            name: 'Usage',
            message: 'How do you use your app?',
            // USE INQUIRER TO VALIDATE ANSWERS.
            validate: (value) => { if (value) { return true } else { return 'Steps needed' }}
        },  

        {
            type: 'checkbox',
            name: 'Licenses',
            message: 'Choose your Licenses',
            choices: [
                "Apache",
                "MCT",
                "ISC",
                "GNU GPLv3"
            ],
            // USE INQUIRER TO VALIDATE ANSWERS.
            validate: (value) => { if (value) { return true } else { return 'Choose a license' }}
        },
        
        {
            type: 'input',
            name: 'Contribution',
            message: 'How to contribute to the project?',
            // USE INQUIRER TO VALIDATE ANSWERS.
            validate: (value) => { if (value) { return true } else { return 'Steps needed' }}
        }, 

        {
            type: 'input',
            name: 'Link',
            message: 'Enter a deployed link?',
            // USE INQUIRER TO VALIDATE ANSWERS.
            validate: (value) => { if (value) { return true } else { return 'Enter a deployable link' }}
        }, 

        {
            type: 'input',
            name: 'Questions',
            message: 'Enter questions for future development',
            // USE INQUIRER TO VALIDATE ANSWERS.
            validate: (value) => { if (value) { return true } else { return 'Enter questions for future development' }}
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            // USE INQUIRER TO VALIDATE ANSWERS.
            validate: (value) => { if (value) { return true } else { return 'Enter questions for future development' }}
        },
    ]);
}


function generateMarkdown(response) {
    return `
# ${response.title}


[GitHub license](https://img.shields.io/badge/license-${response.Licenses}-blue.svg)

## Table of Content

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licenses](#Licenses)
- [Contribution](#Contribution)
- [Link](#Link)
- [Questions](#Questions)
- [email](#email)

## Description:
    ${response.Description}
## Installation:
    ${response.Installation}
## Usage:
    ${response.Usage}
## Licenses:
    ${response.Licenses}
## Contribution:
    ${response.Contribution}
## Link:
    ${response.Link}
## Questions:
    ${response.Questions}
## email:
    ${response.email}

## For additional questions about README-Generator:
   Please reach me out through my email: ${response.email}.
   Here is a video on how to work the application.
#[Video](https://drive.google.com/file/d/1E0htiQKqGOaNPBn43BvTGRmjzF2RB-Pn/view?usp=sharing)

For illustration purposes here is a snapshot of real live instance:
#[Images](https://raw.githubusercontent.com/Rey79-coder/README-generator/main/assets/img/README-sample-template-1920x720.png)

`;
}

// function to initialize program
async function init() {
    try {
        const response = await promptUser();

        const readMe = generateMarkdown(response);

        await writeFileAsync("README.md", readMe);
        console.log("Success!");
    } catch (err) {
        console.log(err);
    }
}

// function call to initialize program
init();




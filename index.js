// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

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

        // {
        //     type: 'checkbox',
        //     name: 'Content Table',
        //     message: 'Enter the table of content',
        //     choices: [
        //         "Description",
        //         "Installation",
        //         "Usage",
        //         "License",
        //         "Contribution",
        //         "Questions"
        //     ],
            // USE INQUIRER TO VALIDATE ANSWERS.
            // validate: (value) => { if (value) { return true } else { return 'Enter a list of the content for this Readme' }}
        // },

         // TABLE OF CONTENTS CHOICES.
        // 1.- DESCRIPTION
        // 2.- INSTALLATION
        // 3.- USAGE INFO
        // 4.- LICENSE
        // 5.- CONTRIBUTIONS
        // 6.- TESTS
        // 7.- QUESTIONS

        {
            type: 'input',
            name: 'Description',
            message: 'Enter a brief description of the project',
            // USE INQUIRER TO VALIDATE ANSWERS.
            validate: (value) => { if (value) { return true } else { return 'Provide description to continue' }}
        },   
        
      
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your app?',
            // USE INQUIRER TO VALIDATE ANSWERS.
            validate: (value) => { if (value) { return true } else { return 'Steps needed' }}
        },    
        
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your app?',
            // USE INQUIRER TO VALIDATE ANSWERS.
            validate: (value) => { if (value) { return true } else { return 'Steps needed' }}
        },  

        {
            type: 'checkbox',
            name: 'License',
            message: 'Choose your license',
            choices: [
                "Apache",
                "MCT",
                "ISC",
                "GNU GPLv3"
            ],
            // USE INQUIRER TO VALIDATE ANSWERS.
            // validate: (value) => { if (value) { return true } else { return 'Enter a list of the content for this Readme' }}
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

# Table of Content

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#Licenses)
- [Contribution](#Contribution)
- [Link](#Link)
- [Questions](#Questions)
- [email](#email)

# Description:
    ${response.Description}
# Installation:
    ${response.installation}
# Usage:
    ${response.usage}
# Contributing:
    ${response.Contribution}
# Link:
    ${response.Link}
# Questions:
    ${response.Questions}
# email:
    ${response.email}

    # For questions about the Generator you can go to my 
    GitHub page at the following Link:(https://github.com/Rey79-coder)
For additional questions please reach out to my email at: ${response.email}.
    Here is a video on how to work the application.
# [Video](https://drive.google.com/drive/u/0/folders/1mCNmRdW1njCDLqONjagt40iXQdfSa4vc)
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



// ).then(({
//     title,
//     description,
//     installation,
//     link

// })=> {

      // TEMPLATE TO USE
//    const template = `# ${title}

//    * [title] (#title)
//    * [description] (#description)
//    * [installation] (#installation)
//    * [link] (#link)
   
//    # title
//    ${title}

//    ## description
//    ${description}

//    ### installation
//    ${installation}

//    #### link
//    ${link}

//    // FUNCTION TO CREATE README
//    createNew

    
// }
// )



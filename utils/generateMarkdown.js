const licenseBadgeLinks = require("./licenseBadges");

function generateMarkdown(response) {

    response.licenseBadge = licenseBadgeLinks[response.license];

    return `# ${response.title}
  
${response.licenseBadge}
  
  ## Table of Content

  -[Description](#Description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[Licenses](#Licenses)
  -[Contribution](#Contribution)
  -[Link](#Link)
  -[Questions](#Questions)
  -[email](#email)
  
  ## Description: 
      ${response.Description}

  ## Installation:
      ${response.Installation}

  ## Usage:
      ${response.Usage}
  
  ## Licenses:
     This repository is licensed under the ${response.license} license.

  ## Contribution:
      ${response.Contribution}

  ## Link:  
      ${response.Link}

  ## Questions:  
      ${response.Questions}

  ## email:  
      ${response.email}

  ## For additional questions:
    Please reach me out through my email: ${response.email}.
  
  ## Video 
    (Comming up...)
    There is a video showing on how to work the application.
   
  ## Images 
    (Comming up...)
    For illustration purposes there is a snapshot of real live instance.
   
   `;
   }

module.exports = generateMarkdown;
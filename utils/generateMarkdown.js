const licenseBadgeLinks = require("./licenseBadges");

function generateMarkdown(response) {

    response.licenseBadge = licenseBadgeLinks[response.license];

    return `# ${response.title}
  
${response.licenseBadge}
  
  ## Table of Content

  -[Description](#Description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[License](#Licenses)
  -[Contribution](#Contribution)
  -[Link](#Link)
  -[Questions](#Questions)
  -[email](#email)
  
  ##Description: 
      ${response.Description}

  ## Installation:
      ${response.Installation}

  ## Usage:
      ${response.Usage}
  
  ## License:
     This repository is licensed under the ${response.Licenses} license.

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
      Here is a video on how to work the application.
   #[Video](Comming up...)
   
   For illustration purposes here is a snapshot of real live instance:
   #[Images](Comming up...)
   
   `;
   }

module.exports = generateMarkdown;
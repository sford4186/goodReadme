// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
![${data.license}]($(https://img.shields.io/badge/License-${data.license}-purple)  
## Description:  
${data.description}
## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)  
  * [License](#license)  
  * [Contributing](#contributing)  
  * [Test](#test)  
  * [Questions](#questions)  

## Installation  
To install this, you will need to run:  
${data.install}  
  
##  Usage  
To use this application: 
${data.usage}  
  
##  License  
This project is licensed under:  
${data.license}  
  
##  Contributing  
Is this project accepting contributions:  
${data.contributing}  
  
## Questions  
If you have questions about the repo email me at ${data.email}. You can see more of my work on [github.](https://www.github.com/${data.question1})



`;
}

module.exports = generateMarkdown;

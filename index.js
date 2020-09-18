const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,generateMarkdown(data),err=>{
        if(err) throw err;
        console.log('readme created')
    })
}

// function to initialize program
function init() {
    inquirer
        .prompt([
            /* Pass your questions in here */
            {
                type: "input",
                message: "What is the title of your project?",
                name: "title",
            },
            {
                type: "input",
                message: "Create a description",
                name: "description",
            },



            //questionable
            {
                type: "input",
                message: "Usage",
                name: "usage",
            },

            //questionable
            {
                type: "list",
                message: "What is the name of the license you used?",
                name: "license",
                choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
            },
            //questionable
            {
                type: "input",
                message: "Contributions?",
                name: "contributing",
            },
            //questionable
            {
                type: "input",
                message: "Did you run a test?",
                name: "test",
                default: "npm test"
            },
            {
                type: "input",
                message: "How do you install this application?",
                name: "install",
                default: "npm i"
            },
            //questionable
            {
                type: "input",
                message: "Enter your GitHub Username",
                name: "question1",
            },
            {
                type: "input",
                message: "Enter your email address",
                name: "email",
            },
            //questionable

        ])
        .then(answers => {
            // Use user feedback for... whatever!!
            console.log("Success!")
            answers.license = encodeURI(answers.license)
            writeToFile(`${answers.title}.md`, answers)
        })
        // .catch(error => {
        //     if (error.isTtyError) {
        //         // Prompt couldn't be rendered in the current environment
        //         console.log("Error!")
        //     } else {
        //         // Something else when wrong
        //         console.log("Re-check your message")
        //     }
        // });


}

// function call to initialize program
init();

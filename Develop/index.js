var inquirer = require("inquirer");
var fs = require("fs")


const gitHubName = ""

// add in axios call for github username and email, use to reach profile and badge

const questions = [
{   type: "input",
    message: "What is your name?",
        name: "personName",
    validate: function validateFirstName(name){
        return name !== '';
    },
},
    {
        type: "input",
        message: "What is your project's name?",
        name: "projectName",
        validate: function validateProjectName(projectName){
            return projectName !== '';
        },
      },
      {
          type: "input",
          message: "Give a short description of your project.",
          name: "projectDescription"
      },
  
      {
          type: "input",
        message: "How do you install this project?",
        name: "installation"
      },
  
      {
          type: "input",
          message: "How is your project used?",
          name: "usage"
      },
  
      {
          type: "input",
        message: "What license is your project working under?",
        name: "license"
      },
  
      {
          type: "input",
        message: "Who contributed to this project?",
        name: "contributingAuthors"
      },
      {
          type: "input",
        message: "Which tests can you use here?",
        name: "tests"
      },
      {
        type: "input",
      message: "What's your email?",
      name: "Email",
      validate: function validateEmail(Email){
        return Email !== '';
    },
    },
      {
          type: "input",
        message: "Any last questions?",
        name: "miscellaneous"
      },
];


inquirer.prompt(questions).then(({projectName, personName, 
    projectDescription, installation, usage,
    contributingAuthors, license, tests, Email, miscellaneous}) => {
        const readmeTitle = `This is the readMe for ${projectName} \n\n`;
        const readmeNames = `Name:\n Hi! I am ${personName},\n\n Project Name:\n ${projectName}\n\n`;
        const descriptInstallUse = `Description:\n ${projectDescription}, 
        \n\n Installation Instructions:\n ${installation}\n\n
        Usage Instructions:\n ${usage}\n\n`
        const licenseAuthorTest = `License:\n ${license}, \n\n 
        Contributing Authors: \n ${contributingAuthors} \n\n
        Tests:\n ${tests} `
        const emailMisc = `My email is ${Email}\n\n
        Miscellaneous:\n ${miscellaneous}`
fs.appendFile("readme.md", readmeTitle, err => {
          if (err) {
            return console.log(err);
          }
          console.log("Check the readme");
        });
fs.appendFile("readme.md", readmeNames, err => { 
            if (err) {
              return console.log(err);
            }
            else {
                console.log("Names worked!")
            }
          });
fs.appendFile("readme.md", descriptInstallUse, err => { 
        if (err) {
            return console.log(err);
        }
        else {
        console.log("Description worked!")
    }
          });
fs.appendFile("readme.md", licenseAuthorTest, err => { 
            if (err) {
                return console.log(err);
            }
            else {
            console.log("LAT worked!")
        }
        });
fs.appendFile("readme.md", emailMisc, err => { 
            if (err) {
                return console.log(err);
            }
            else {
            console.log("EmailMisc worked!")
        }
        });
    })
function init() {

}

init();

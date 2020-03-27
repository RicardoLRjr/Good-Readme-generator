const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios")
var gitHubimage = ""
const questions = [
{
    type: "input",
    message: "Enter your GitHub username:",
    name: "username"
},
{   
    type: "input",
    message: "What is your real name?",
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
      message: "What do you want your badge to say?",
      name: "badgeName",
    },
    {
        type: "input",
        message: "What is your project's status?",
        name: "badgeStatus",
      },
      {
        type: "input",
        message: "What color do you want your badge to be?",
        name: "badgeColor",
      },
      {
          type: "input",
        message: "Any last questions?",
        name: "miscellaneous"
      },
];

inquirer.prompt(questions).then(({username, projectName, personName, 
    projectDescription, installation, usage,
    contributingAuthors, license, badgeName, badgeStatus, badgeColor, tests, miscellaneous}) => {
const queryUrl =`https://api.github.com/users/${username}`;

axios.get(queryUrl).then(function(response) {
    gitHubimage = response.data.avatar_url;
    console.log(response.data.avatar_url)
      return gitHubimage
    }).then (function() {
const readme = `# This is the readMe for ${projectName}. \n\n ## Name:\n Hi! I am ${personName}\n\n ## Project Name:\n ${projectName}\n\n ## Description:\n ${projectDescription} \n\n ## Table of Contents: \n # Installation \n # Usage \n # License \n # Contributing Authors \n # Tests \n # Miscellaneous \n\n ## Installation Instructions:\n ${installation}\n\n ## Usage Instructions:\n ${usage}\n\n ## License:\n ${license} \n\n ## Contributing Authors: \n ${contributingAuthors} \n\n ## Tests:\n ${tests}\n\n ## Miscellaneous:\n ${miscellaneous}\n\n\n Badge:\n https://img.shields.io/badge/${badgeName}-${badgeStatus}-${badgeColor}.svg)(https://shields.io/) \n\n <img src= ${gitHubimage}> `;
fs.writeFile("GeneratedReadme.md", readme, err => {
          if (err) {
            return console.log(err);
          }
          console.log("Check the readme");
        })}).catch(function(err) {
            console.log(err);
          });
    })


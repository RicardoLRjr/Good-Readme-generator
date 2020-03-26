var inquirer = require("inquirer");

const questions = [

];

function writeToFile(fileName, data) {
}



inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project's name?",
      name: "projectName"
    },
    {
        type: "input",
        message: "Give a short description of your project.",
        name: "projectDescription"
    },

    // installation goes here

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
      message: "Any last questions?",
      name: "questions"
    }

  ])

function init() {

}

init();

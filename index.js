const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require(./src/generateHTML)
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamEmployees = [];

function createManager() {
  inquirer.prompt([
    {
      message: "Who is the team manager?",
      type: "input",
      name: "managerName",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter a manager's name.";
      }
    },
    {
      message: "What is the manager's ID?",
      type: "input",
      name: "managerID",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter a valid ID number.";
      }
    },
    {
      message: "What is the manager's email?",
      type: "input",
      name: "managerEmail",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter a valid email.";
      }
    },
    {
      message: "What is the manager's office number?",
      type: "input",
      name: "managerOffice",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter a valid office number.";
      }
    },
  ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
    teamEmployees.push(manager);
    createTeam();
  });
};

functin creatTeam() {
  inquirer.prompt([
    {
      message: "Select "
    }
  ])
}
const inquirer = require('inquirer')
const fs = require('fs')
const generateHTML = require('./src/generateHTML')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const teamArray = [];

function createManager() {
  inquirer.prompt([
    {
      message: "Enter Manager name:",
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
      message: "Enter Manager ID number:",
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
      message: "Enter Manager email:",
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
      message: "Enter Manager office number:",
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
    const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice);
    teamArray.push(manager);
    createTeam();
  });
}

function createTeam() {
  inquirer.prompt([
    {
      message: "Select an option:",
      type: "list",
      name: "teamChoice",
      choices: [
        "Engineer",
        "Intern",
        "Finish Building Team"
      ]
    }
  ]).then(userChoice => {
    switch (userChoice.teamChoice) {
      case "Engineer":
        createEngineer();
        break;
      case "Intern":
        createIntern();
        break;
      default:
        writeToFile("./dist/team.html", generateHTML(teamArray));
    }
  });
}

function createEngineer() {
  inquirer.prompt([
    {
      message: "Enter Engineer name:",
      type: "input",
      name: "engineerName",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter a valid name."
      }
    },
    {
      message: "Enter Engineer ID number:",
      type: "input",
      name: "engineerID",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter a valid ID number.";
      }
    },
    {
      message: "Enter Engineer email:",
      type: "input",
      name: "engineerEmail",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter a valid email.";
      }
    },
    {
      message: "Enter Engineer office number:",
      type: "input",
      name: "engineerOffice",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter a valid office number.";
      }
    },
    {
      message: "Enter Engineer GitHub username:",
      type: "input",
      name: "engineerUsername",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter a valid username.";
      }
    }
  ]).then(answers => {
    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerOffice, answers. engineerUsername);
    teamArray.push(engineer);
    createTeam();
  });
}

function createIntern() {
  inquirer.prompt([
    {
      message: "Enter Intern name:",
      type: "input",
      name: "internName",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter a valid name."
      }
    },
    {
      message: "Enter Intern ID number:",
      type: "input",
      name: "engineerID",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter a valid ID number.";
      }
    },
    {
      message: "Enter Intern email:",
      type: "input",
      name: "internEmail",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter a valid email.";
      }
    },
    {
      message: "Enter Intern office number:",
      type: "input",
      name: "internOffice",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter a valid office number.";
      }
    },
    {
      message: "Enter Intern School:",
      type: "input",
      name: "internSchool",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter a valid username.";
      }
    }
  ]).then(answers => {
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internOffice, answers.internSchool);
    teamArray.push(intern);
    createTeam();
  });
}

function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    if (err) throw err;
    console.log("Success")
  });
}

createManager();
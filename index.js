// required packages
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Card = require("./dist/Card.js");
const generateHTML = require("./dist/generateHTML.js");

team = [];

function init(){
  



function newTeam(){
    inquirer.prompt([
      {
        type: 'list',
        name: "newEmployee",
        message: "What is the new employees's role?",
        choices: ["Manager", "Engineer", "Intern", "No new team members"]
      }
  ])
  .then((data) => {
    switch(data.newEmployee){
      case "Manager":
        manager()
      break;
      case "Engineer":
        engineer()  
      break;
      case "Intern":
        intern()
      break;
      default:
        renderHTML()
        console.log("Team Complete");

    }
  });
}

function manager(){

  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the team manager's name?",
    },
    {
      type: 'input',
      message: "What is the manager's id?",
      name: 'id',
    },
    {
      type: 'input',
      message: "What is the manager's email address?",
      name: 'email',
    },
    {
      type: 'input',
      message: "What is the manager's office number?",
      name: 'officenumber',
    },
  ])
  .then((answers) => {
    
    const manager = new Manager(answers.name, answers.id, answers.email, answers.school);
    team.push(manager);
    
    newTeam();

  });
    

}
  function engineer(){
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
      },
      {
        type: 'input',
        message: "What is the engineer's id?",
        name: 'id',
      },
      
      {
        type: 'input',
        message: "What is the engineer's email address?",
        name: 'email',
      },

      {
        type: 'input',
        message: "What is the engineer's github username?",
        name: 'username',
      },
    ])
    .then((answers) => {
      
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.school);
      team.push(engineer);
      
      newTeam();

      
    });
    }
  function intern(){
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
      },
      {
        type: 'input',
        message: "What is the intern's id?",
        name: 'id',
      },
      {
        type: 'input',
        message: "What is the intern's email address?",
        name: 'email',
      },

      {
        type: 'input',
        message: "What is the intern's school?",
        name: 'internschool',
      },
    ])
    .then((answers) => {
      
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      team.push(intern);
      
       console.log('Successfully created intern.html!')
     
      
      newTeam();

    });
    };

    function renderHTML(){
     
     
    fs.writeFile(index.html, generateHTML(team), "UTF-8");
    console.log("Team succesfully completed!");


    }


    newTeam();
};

  
  init();
  
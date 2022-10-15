// required packages
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Card = require("./dist/Card.js");

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
    const managerHTML = Card.generateManager(answers);

    fs.writeFile("manager.html", managerHTML, (err) =>
      err ? console.log(err) :
     console.log('Successfully created manager.html!')
    );
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
      const engineerHTML = Card.generateEngineer(answers);
  
      fs.writeFile('engineer.html', engineerHTML, (err) =>
        err ? console.log(err) :
       console.log('Successfully created engineer.html!')
      );
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
      // const internHTML = Card.generateIntern(answers);
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      team.push(intern);
      // fs.writeFile('intern.html', internHTML, (err) =>
      //   err ? console.log(err) :
       console.log('Successfully created intern.html!')
      // );
      
      newTeam();

    });
    
    }

      
  // const init = () => {
  //   newTeam()
      
  //   // .then((answers) => writeFile('index.html', generateHTML(answers)))
  //     // .then(() => console.log('Successfully wrote to index.html'))
  //     // .catch((err) => console.error(err));
  // };
  
  newTeam()
};


  init();
  
// required packages
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Manager = require("./lib/Intern.js");
const Manager = require("./lib/Employee.js");
const Manager = require("./lib/Engineer.js");


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
      case "No new team members"
      
      break;

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
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
    const html = generateHTML(data);
    fs.writeFile("index.html", html, (err) =>
      err ? console.log(err) : console.log('Success !')
    );
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
        name: 'github',
      },
    ])
    .then((data) => {
      const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
      const html = generateHTML(data);
      fs.writeFile("index.html", html, (err) =>
        err ? console.log(err) : console.log('Success !')
      );
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
        name: 'school',
      },
    ])
    .then((data) => {
      const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
      const html = generateHTML(data);
      fs.writeFile("index.html", html, (err) =>
        err ? console.log(err) : console.log('Success !')
      );
    });

  }


  function generateHTML(data){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    
        <div>
            <ul>
                <li>${data.name}</li>
                <li>${data.home}</li>
                <li>${data.hobby}</li>
                <li>${data.food}</li>
                <li>${data.githubname}</li>
                <li>${data.url}</li>
            </ul>
           
        </div>
    
    
        
    </body>
    </html>
`
  };

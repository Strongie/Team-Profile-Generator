// required packages
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");


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
  ])
  .then((data) => {
       const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
  
      fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
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
        name: 'github',
      },
    ])
    .then((data) => {
      const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
  
      fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
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
        name: 'school',
      },
    ])
    .then((data) => {
      const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
  
      fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
      );
      newTeam();
    });
    

  }


//   function generateHTML(data){
//     return `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
//     </head>
//     <body>
    
//         <div>
//             <ul>
//                 <li>${data.name}</li>
//                 <li>${data.home}</li>
//                 <li>${data.hobby}</li>
//                 <li>${data.food}</li>
//                 <li>${data.githubname}</li>
//                 <li>${data.url}</li>
//             </ul>
           
//         </div>
    
    
        
//     </body>
//     </html>
// `
  // };

  const init = () => {
    newTeam()
      
      // .then((answers) => writeFile('index.html', generateHTML(answers)))
      // .then(() => console.log('Successfully wrote to index.html'))
      // .catch((err) => console.error(err));
  };
  
  init();
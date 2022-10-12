// required packages
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Manager = require("./lib/Intern.js");
const Manager = require("./lib/Employee.js");
const Manager = require("./lib/Engineer.js");

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your team managers name?',
    },
    {
      type: 'input',
      message: 'What is the id?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is your email address?',
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

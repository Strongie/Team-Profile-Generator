const generateHTML = team => {


const generateManager = manager => {

    return `
    
    <div class="card">
    <h2>${manager.name}</h2>
    <h3>Manager</h3>
    <ul>
        <li>ID: ${manager.id}</li>
        <li><a href="mailto: ${manager.email}">Email: ${manager.email}</a></li>
        <li>Office Number: ${manager.officeNumber}</li>

    </ul>
  </div>
    `
};

const generateEngineer = engineer => {

    return `
    <div class="card">
            <h2>${engineer.name}</h2>
            <h3>Engineer</h3>
            <ul>
                <li>ID:${engineer.Id}</li>
                <li><a href="mailto: ${engineer.email}">Email: ${engineer.email}</a></li>
                <li><a href="http://github.com/${engineer.username}">Username: ${engineer.username}</a></li>

            </ul>
          </div>
       
    `
};

const generateIntern = intern => {

    return `
    <div class="card">
                <h2>${intern.name}</h2>
                <h3>Intern</h3>
                <ul>
                    <li>ID: ${intern.Id}</li>
                    <li><a href="mailto: ${intern.email}">Email: ${intern.email}</a></li>
                    <li>School: ${intern.school}</li>    
                </ul>
              </div>
        `
};

const output =[];

output.push(team
    .filter(employee => employee.getRole() == "Manager")
    .map (manager=>generateManager(manager)) 
    .join("")


);

output.push(team
    .filter(employee => employee.getRole() == "Engineer")
    .map (engineer=>generateEngineer(engineer)) 
    .join("")


);

output.push(team
    .filter(employee => employee.getRole() == "Intern")
    .map (engineer =>generateIntern(engineer)) 
    .join("")
);

return output.join("");

};

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Generator</title>
</head>
<body>
    <header id="title">
            <h1> Meet the Team</h1>

    </header>
    
    <div class="container">
        <div class="row">
          <div>
            ${generateHTML(team)}
          </div>
        </div>
    </div>


      <script src="./index.js"></script> 
</body>
</html>
    
`
}



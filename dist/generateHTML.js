const generateHTML = team => {


const generateManager = manager => {

    return `
    
    <div class="card">
    <h2>${manager.getname()}</h2>
    <h3>${manager.getRole()}</h3>
    <ul>
        <li>ID: ${manager.getId}</li>
        <li><a href="mailto: ${manager.getEmail()}">Email: ${manager.getEmail()}</a></li>
        <li>Office Number: ${manager.getNumber()}</li>

    </ul>
  </div>
    `
};

const generateEngineer = engineer => {

    return `
    <div class="card">
            <h2>${engineer.getName()}</h2>
            <h3>${engineer.getRole()}</h3>
            <ul>
                <li>ID:${engineer.getId()}</li>
                <li><a href="mailto: ${engineer.getEmail()}">Email: ${engineer.getEmail()}</a></li>
                <li><a href="http://github.com/${engineer.getGithub()}">Username: ${engineer.getGithub()}</a></li>

            </ul>
          </div>
       
    `
};

const generateIntern = intern => {

    return `
    <div class="card">
                <h2>${intern.getname()}</h2>
                <h3>${intern.getRole()}</h3>
                <ul>
                    <li>ID: ${intern.getId()}</li>
                    <li><a href="mailto: ${intern.getEmail()}">Email: ${intern.getEmail()}</a></li>
                    <li>School: ${intern.getSchool()}</li>    
                </ul>
              </div>
        `
};

const output =[];

output.push(team
    .filter(employee => employee.getRole() == "Manager")
    .map (manager=>generateManager(manager)) 



);

output.push(team
    .filter(employee => employee.getRole() == "Engineer")
    .map (engineer=>generateEngineer(engineer)) 



);

output.push(team
    .filter(employee => employee.getRole() == "Intern")
    .map (engineer =>generateIntern(engineer)) 

);

return output;

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



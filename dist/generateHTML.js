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








}
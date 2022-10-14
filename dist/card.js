const Intern = require("../lib/Intern");


module.exports = {

    generateManager ({ name, id, email, officeNumber }){
        return `<div class="card">
         <h2>${manager.getName()}</h2>
         <h3>${manger.getRole()}</h3>
         <ul>
             <li>ID: ${manager.getID()}</li>
             <li><a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
             <li>office number:${manager.getNumber()}</li>
       
         </ul>
       </div>`
       },
       
    generateEngineer ({ name, id, email, username }){
        return `<div class="card">
         <h2>${engineer.getName()}</h2>
         <h3>${engineer.getRole()}</h3>
         <ul>
             <li>ID: ${engineer.getID()}</li>
             <li><a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
             <li><a href="http://${engineer.getGithub()}">${engineer.getGithub()}</a></li>
       
         </ul>
       </div>`
       },
       
     generateIntern ({ name, id, email, school }){
        return `<div class="card">
         <h2>${Intern.getName()}</h2>
         <h3>${Intern.getRole()}</h3>
         <ul>
             <li>ID: ${Intern.getID()}</li>
             <li><a href="mailto: ${Intern.getEmail()}">${Intern.getEmail()}</a></li>
             <li>School: ${Intern.getSchool()}</li>
       
         </ul>
       </div>`
       }

};


// export {generateIntern};
// module.exports = generateIntern;
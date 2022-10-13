
function generateManager ({ name, id, email, officeNumber }){
 return `<div class="card">
  <h2>${manager.getName()}</h2>
  <h3>${manger.getRole()}</h3>
  <ul>
      <li>ID: ${manager.getID()}</li>
      <li><a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
      <li>office number:${manager.getNumber()}</li>

  </ul>
</div>`
};

function generateEngineer ({ name, id, email, username }){
 return `<div class="card">
  <h2>${engineer.getName()}</h2>
  <h3>${engineer.getRole()}</h3>
  <ul>
      <li>ID: ${engineer.getID()}</li>
      <li><a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      <li><a href="http://${engineer.getGithub()}">${engineer.getGithub()}</a></li>

  </ul>
</div>`
};

function generateIntern ({ name, id, email, school }){
 return `<div class="card">
  <h2>${intern.getName()}</h2>
  <h3>${intern.getRole()}</h3>
  <ul>
      <li>ID: ${intern.getID()}</li>
      <li><a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li>School: ${intern.getSchool()}</li>

  </ul>
</div>`
};

module.exports = {

    generateManager ({ name, id, email, officenumber }){
        return `<div class="card">
         <h2>${name}</h2>
         <h3>Manager</h3>
         <ul>
             <li>ID: ${id}</li>
             <li><a href="mailto: ${email}">${email}</a></li>
             <li>office number:${officenumber}</li>
       
         </ul>
       </div>`
       },
       
    generateEngineer ({ name, id, email, username }){
        return `<div class="card">
         <h2>${name}</h2>
         <h3>Engineer</h3>
         <ul>
             <li>ID: ${id}</li>
             <li><a href="mailto: ${email}">${email}</a></li>
             <li><a href="http://github.com/${username}">${username}</a></li>
       
         </ul>
       </div>`
       },
       
     generateIntern ({ name, id, email, school }){
        return `<div class="card">
         <h2>${name}</h2>
         <h3>Intern</h3>
         <ul>
             <li>ID: ${id}</li>
             <li><a href="mailto: ${email}">${email}</a></li>
             <li>School: ${school}</li>
       
         </ul>
       </div>`
       }

};


// export {generateIntern};
// module.exports = generateIntern;
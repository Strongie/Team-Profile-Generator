// function includeHTML() {
//     var z, i, elmnt, file, xhttp;
//     /*loop through a collection of all HTML elements:*/
//     z = document.getElementsByTagName("*");
//     for (i = 0; i < z.length; i++) {
//       elmnt = z[i];
//       /*search for elements with a certain atrribute:*/
//       file = elmnt.getAttribute("w3-include-html");
//       if (file) {
//         /*make an HTTP request using the attribute value as the file name:*/
//         xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function() {
//           if (this.readyState == 4) {
//             if (this.status == 200) {elmnt.innerHTML = this.responseText;}
//             if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
//             /*remove the attribute, and call this function once more:*/
//             elmnt.removeAttribute("w3-include-html");
//             includeHTML();
//           }
//         }      
//         xhttp.open("GET", file, true);
//         xhttp.send();
//         /*exit the function:*/
//         return;
//       }
//     }
//   };

// includeHTML();


//  $(function(){
//  $("#engineer").load("manager.html"); 
//  });
// const Employee = require("../lib/Employee.js");
// const Manager = require("../lib/Manager.js");
// // const index = require("index.js");


// function generateHTML(){
//     if (data.choices == "Manager")
//     fetch("manager.html")
//     .then(response => {
//       return response.text()
//     })
//     .then(data => {
//       document.querySelector("id1").innerHTML = data;
//     });
  
//     if (Employee.choices == "Engineer")
//     fetch("/engineer.html")
//     .then(response => {
//       return response.text()
//     })
//     .then(data => {
//       document.querySelector("id2").innerHTML = data;
//     });

//     if (Employee.choices == "Intern")
//     fetch("/intern.html")
//     .then(response => {
//       return response.text()
//     })
//     .then(data => {
//       document.querySelector("id1").innerHTML = data;
//     });

// }

// //  generateHTML();
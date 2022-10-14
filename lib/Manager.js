// Set up subclass
// link to parent class
const Employee = require("./Employee.js");

// manager to also have office number and getRole() Overridden to return 'Manager'

class Manager extends Employee {
    constructor(name, id, email, officenumber) {
      super(name, id, email);
      this.officenumber = officenumber;
        }

        getRole(){
          return "Manager";
          }
         
         getNumber() {
          return this.officenumber;

         }

  }

  module.exports = Manager
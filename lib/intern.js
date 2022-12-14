// Set up subclass
// link to parent class
const Employee = require("./Employee.js");

// will also have school, getSchool() and getRole() Overridden to return 'Intern'

class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
        }

        getSchool(){
          return this.school;

        }

        getRole(){
          return "Intern";

        }

  }

  module.exports = Intern
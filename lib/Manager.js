// Set up subclass
// link to parent class
const Employee = require("./Employee.js");

// manager to also have office number and getRole() Overridden to return 'Manager'

class Engineer extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.username = officeNumber;
        }

        getRole()

  }
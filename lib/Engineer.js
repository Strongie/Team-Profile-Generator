// Set up subclass
// link to parent class
const Employee = require("./Employee.js");

// will also have github - GitHub username, getGithub() and getRole() - Overridden to return 'Engineer'

class Engineer extends Employee {
    constructor(name, id, email, username) {
      super(name, id, email);
      this.username = username;
        }

        getGithub()

        getRole()

  }
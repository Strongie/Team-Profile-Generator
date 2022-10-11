const Manager = require("./lib/Manager.js");

describe('Manager', () => {
    it("should return the manager name", () => {
    
    // Arrange
    const name = 'John';
    const id = '2'
    const email = 'john@email.com'
    const role = 'Manager'
    const officeNumber = 'officenumber'
  
    // Act
    const checkManager = new Manager(name, id, email, officeNumber);
  
    // Assert
    expect(checkManager.getName()).toEqual(name);
      });
  
     
    it("should provide the Manager id when requested ", () => {
        // Arrange
        const name = 'John';
        const id = '2'
        const email = 'john@email.com'
        const role = 'Manager'
        const officeNumber = 'officenumber'
  
    // Act
    const checkManager = new Manager(name, id, email, officeNumber);
  
    // Assert
    expect(checkManager.getID()).toEqual(id);
      });

    it("should return the manager email when requested", () => {
    
        // Arrange
        const name = 'John';
        const id = '2'
        const email = 'john@email.com'
        const role = 'Manager'
        const officeNumber = 'officenumber'
      
        // Act
        const checkManager = new Manager(name, id, email, officeNumber);
      
        // Assert
        expect(checkManager.getEmail()).toEqual(email);
          });
      
         
        it("should provide the manager role when requested ", () => {
            // Arrange
            const name = 'John';
            const id = '2'
            const email = 'john@email.com'
            const role = 'Manager'
            const officeNumber = 'officenumber'
      
        // Act
        const checkManager = new Manager(name, id, email, officeNumber);
      
        // Assert
        expect(checkManager.getRole()).toEqual(role);
          });
          
          it("should provide the manager office number when requested ", () => {
            // Arrange
            const name = 'John';
            const id = '2'
            const email = 'john@email.com'
            const role = 'Manager'
            const officeNumber = 'officenumber'
      
        // Act
        const checkManager = new Manager(name, id, email, officeNumber);
      
        // Assert
        expect(checkManager.officeNumber).toEqual(officeNumber);
          });    
      });
const Engineer = require("../lib/Engineer.js");

describe('Engineer', () => {
    it("should return the employee name", () => {
    
    // Arrange
    const name = 'John';
    const id = '2'
    const email = 'john@email.com'
    const role = 'Manager'
    const github = 'strongie'
  
    // Act
    const checkEngineer = new Engineer(name, id, email, github);
  
    // Assert
    expect(checkEngineer.getName()).toEqual(name);
      });
  
     
    it("should provide the engineer id when requested ", () => {
        // Arrange
        const name = 'John';
        const id = '2'
        const email = 'john@email.com'
        const role = 'Manager'
        const github = 'strongie'
  
    // Act
    const checkEngineer = new Engineer(name, id, email, github);
  
    // Assert
    expect(checkEngineer.getID()).toEqual(id);
      });

    it("should return the engineer email when requested", () => {
    
        // Arrange
        const name = 'John';
        const id = '2'
        const email = 'john@email.com'
        const role = 'Manager'
        const github = 'strongie'
        // Act
        const checkEngineer = new Engineer(name, id, email, github);
      
        // Assert
        expect(checkEngineer.getEmail()).toEqual(email);
          });
      
         
        it("should provide the engineer role when requested ", () => {
            // Arrange
            const name = 'John';
            const id = '2'
            const email = 'john@email.com'
            const role = 'Manager'
            const github = 'strongie'
      
        // Act
        const checkEngineer = new Engineer(name, id, email, github);
      
        // Assert
        expect(checkEngineer.getRole()).toEqual(role);
          }); 
          
          it("should provide the email", () => {
            // Arrange
            const name = 'John';
            const id = '2'
            const email = 'john@email.com'
            const role = 'Manager'
            const github = 'strongie'
      
        // Act
        const checkEngineer = new Engineer(name, id, email, github);
      
        // Assert
        expect(checkEngineer.getEmail()).toEqual(email);
          });      
       
       it("should provide the github username", () => {
            // Arrange
            const name = 'John';
            const id = '2'
            const email = 'john@email.com'
            const role = 'Manager'
            const github = 'strongie'
      
        // Act
        const checkEngineer = new Engineer(name, id, email, github);
      
        // Assert
        expect(ccheckEngineer.getGithub()).toEqual(github);
          });


      });
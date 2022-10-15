const Intern = require("../lib/Intern.js");

describe('Intern', () => {
    it("should return the intern name", () => {
    
    // Arrange
    const name = 'John';
    const id = '2'
    const email = 'john@email.com'
    const role = 'Intern'
    const school = 'School'
  
    // Act
    const checkIntern = new Intern(name, id, email, school);
  
    // Assert
    expect(checkIntern.getName()).toEqual(name);
      });
  
     
    it("should provide the intern id when requested ", () => {
        // Arrange
        const name = 'John';
        const id = '2'
        const email = 'john@email.com'
        const role = 'Internr'
        const school = 'School'
  
    // Act
    const checkIntern = new Intern(name, id, email, school);
  
    // Assert
    expect(checkIntern.getID()).toEqual(id);
      });

    it("should return the intern email when requested", () => {
    
        // Arrange
        const name = 'John';
    const id = '2'
    const email = 'john@email.com'
    const role = 'Intern'
    const school = 'School'
      
        // Act
        const checkIntern = new Intern(name, id, email, school);
      
        // Assert
        expect(checkIntern.getEmail()).toEqual(email);
          });
      
         
        it("should provide the intern role when requested ", () => {
            // Arrange
            const name = 'John';
            const id = '2'
            const email = 'john@email.com'
            const role = 'Intern'
            const school = 'School'
      
        // Act
        const checkIntern = new Intern(name, id, email, school);
      
        // Assert
        expect(checkIntern.getRole()).toEqual(role);
          });
          
          it("should provide the intern school when requested ", () => {
            // Arrange
            const name = 'John';
            const id = '2'
            const email = 'john@email.com'
            const role = 'Intern'
            const school = 'School'
      
        // Act
        const checkIntern = new Intern(name, id, email, school);
      
        // Assert
        expect(checkIntern.getSchool()).toEqual(school);
          });    
      });
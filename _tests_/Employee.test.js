const Employee = require("../lib/Employee.js");

describe('Employee', () => {
        it("should return the employee name", () => {
        
        // Arrange
        const name = 'John';
        const id = '2'
        const email = 'john@email.com'
        const role = 'Manager'
      
        // Act
        const checkEmployee = new Employee(name, id, email);
      
        // Assert
        expect(checkEmployee.getName()).toEqual(name);
          });
      
         
        it("should provide the employee id when requested ", () => {
            // Arrange
        const name = 'John';
        const id = '2'
        const email = 'john@email.com'
        const role = 'Manager'
      
        // Act
        const checkEmployee = new Employee(name, id, email);
      
        // Assert
        expect(checkEmployee.id).toEqual(id);
          });

        it("should return the employee email when requested", () => {
        
            // Arrange
            const name = 'John';
            const id = '2'
            const email = 'john@email.com'
            const role = 'Manager'
          
            // Act
            const checkEmployee = new Employee(name, id, email);
          
            // Assert
            expect(checkEmployee.email).toEqual(email);
              });
          
                        
          });
     
      
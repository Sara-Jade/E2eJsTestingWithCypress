describe('Textbox allows the appropriate number of characters', () => {
    it('should display the correct count of remaining characters', () => {
        // Displays 15 remaining chars immediately after loading webpage.
        cy.visit('http://localhost:3000/example-2');
        cy.get('span').invoke('text').should('equal', '15');
        
        // Displays 14 remaining chars after typing 1 char.
        cy.get('input').type('H');
        cy.get('span').invoke('text').should('equal', '14');

        // Displays 1 remaining char after typing 14 chars total.
        cy.get('input').type('ello, my frie');
        cy.get('span').invoke('text').should('equal', '1');

        // Displays 0 remaining chars after typing 15 chars total.
        cy.get('input').type('n');
        cy.get('span').invoke('text').should('equal', '0');
    })

    it('should prevent the user from typing more than the max num of characters', () => {
        cy.visit('http://localhost:3000/example-2');
        cy.get('input').type('abcdefghijklmnop');
        cy.get('input').should('have.attr', 'value', 'abcdefghijklmno');
    })
})
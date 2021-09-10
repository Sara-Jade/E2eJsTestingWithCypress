// Can use test doubles (spies, mocks, stubs) to simulate server errors or recurring workflows like logging in.
// Usually you don't want to, because this would be unit testing, but it sometimes makes sense for the above situations.
// This works better if your Cypress tests sit alongside your product code, so the course doesn't do a real demo.

// Usually, we don't want to alert, but this is a demo to prove 
// that Cypress can access env variables.
alert(Cypress.env('MyEnvVARIABLE')); 

describe('Basic page element interactions', () => {
    beforeEach(() => {
        cy.visit('/example-4');
    });

    it('should set the header text to the item\'s name when double-clicked', () => {
        cy.get('[data-cy="box-1-items-list"] > :nth-child(2)').dblclick();

        cy.get('[data-cy="box-1-selected-name"]').invoke('text').should('equal', 'Option Two');
    });

    it('should display the count of the selected checkboxes', () => {
        cy.get('[data-cy="box-2-checkboxes"] > :nth-child(3) input').check()
            .then(() => { debugger; }); 
            // Must have dev tools open for debugger to work.
            // Don't forget to look in console and type subject and subject.text()!
            // Also click into commands on the left to get a console summary of what happened.

        cy.get('[data-cy="box-2-selected-count"]').invoke('text').should('equal', '1');
    });

    it('should display the name of the selected drop-down item', () => {
        cy.get('[data-cy="box-3-dropdown"]').select('Option One');

        cy.get('[data-cy="box-3-selected-name"]').invoke('text').should('equal', 'Option One');
    });

    it('should display the name of the most recently hovered-over item', () => {
        cy.get('[data-cy="box-4-items-list"] > :nth-child(3)').trigger('mouseover', 10, 20);
        cy.get('[data-cy="box-4-items-list"] > :nth-child(2)').trigger('mouseover').debug(); // Another way to debug with dev tools open.

        cy.get('[data-cy="box-4-selected-name"]').invoke('text').should('equal', 'Option Two');
    });
});
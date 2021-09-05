describe('Basic page element interactions', () => {
    beforeEach(() => {
        cy.visit('/example-4');
    });

    it('should set the header text to the item\'s name when double-clicked', () => {
        cy.get('[data-cy="box-1-items-list"] > :nth-child(2)').dblclick();

        cy.get('[data-cy="box-1-selected-name"]').invoke('text').should('equal', 'Option Two');
    });

    it('should display the count of the selected checkboxes', () => {
        cy.get('[data-cy="box-2-checkboxes"] > :nth-child(3) input').check();

        cy.get('[data-cy="box-2-selected-count"]').invoke('text').should('equal', '1');
    });

    it('should display the name of the selected drop-down item', () => {
        cy.get('[data-cy="box-3-dropdown"]').select('Option One');

        cy.get('[data-cy="box-3-selected-name"]').invoke('text').should('equal', 'Option One');
    });
});
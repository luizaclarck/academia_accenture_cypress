Cypress.Commands.add('selecionar', (id, option) => {
    cy.get(id).select(option);
})

Cypress.Commands.add('digitar', (id, value) => {
    cy.get(id).type(value)
})

Cypress.Commands.add('clicar', (id) => {
    cy.get(id).click();
})

Cypress.Commands.add('marcar', (id) => {
    cy.get(`input[value="${id}"]`).check({ force: true });
})

Cypress.Commands.add('validaMensagem', (id) => {
    cy.get(id, { timeout: 20000 }).should('be.visible');
})
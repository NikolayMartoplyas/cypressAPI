// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('createUser', (user) => {
  cy.request({
    url: ('/'),
    method: 'POST',
    body: user
  });
});
Cypress.Commands.add('getUser', (name) => {
  cy.request({
    url: `/${name}`,
    method: 'GET'
  });
});
Cypress.Commands.add('changeUser', (name, user) => {
  cy.request({
    url: `/${name}`,
    method: 'PUT',
    body: user
  });
});
Cypress.Commands.add('deleteUser', (name) => {
  cy.request({
    url: `/${name}`,
    method: 'DELETE',
  });
});
Cypress.Commands.add('getRemoteUser', (name) => {
  cy.request({
    failOnStatusCode: false,
    url: `/${name}`,
    method: 'GET'
  });
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

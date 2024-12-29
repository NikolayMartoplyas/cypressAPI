const user = require('../fixtures/body.json');
describe('api test', () => {
  it('create user', () => {
    cy.createUser(user.user1).then((response) => {
      cy.log(response);
      const requestBody = JSON.parse(response.requestBody);
      expect(response.status).to.eq(200);
      expect(requestBody.username).to.eq(user.user1.username);
      expect(requestBody.id).to.eq(user.user1.id);
    });
    cy.getUser(user.user1.username).then((response) => {
      cy.log(response);
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(user.user1.id);
      expect(response.body.username).to.eq(user.user1.username);
    });
  });
  it('user edits', () => {
    cy.createUser(user.user2).then((response) => {
      cy.log(response);
      const requestBody = JSON.parse(response.requestBody);
      expect(response.status).to.eq(200);
      expect(requestBody.username).to.eq(user.user2.username);
      expect(requestBody.id).to.eq(user.user2.id);
    });
    cy.changeUser(user.user2.username, user.userPUT).then((response) => {
      cy.log(response);
      const requestBody = JSON.parse(response.requestBody); //парсинг
      expect(response.status).to.eq(200);
      expect(requestBody.id).to.eq(user.userPUT.id);
      expect(requestBody.username).to.eq(user.userPUT.username);
    });
    cy.getUser(user.userPUT.username).then((response) => {
      cy.log(response);
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(user.userPUT.id);
      expect(response.body.username).to.eq(user.userPUT.username);
    });
  });
  it('delete user', () => {
    cy.createUser(user.user3).then((response) => {
      cy.log(response);
      const requestBody = JSON.parse(response.requestBody);
      expect(response.status).to.eq(200);
      expect(requestBody.username).to.eq(user.user3.username);
      expect(requestBody.id).to.eq(user.user3.id);
    });
    cy.getUser(user.user3.username).then((response) => {
      cy.log(response);
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(user.user3.id);
      expect(response.body.username).to.eq(user.user3.username);
    });
    cy.deleteUser(user.user3.username).then(({ status }) => {
      expect(status).to.eq(200);
    });
    cy.getRemoteUser(user.user3.username).then(({ status }) => {
      expect(status).to.eq(404);
    });
  });
});

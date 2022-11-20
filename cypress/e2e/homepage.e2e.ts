describe('Homepage', () => {
  it('should contain "Hello World!" title', async () => {
    cy.visit('/')
      .findByText(/hello world!/i)
      .should('exist');
  });
});

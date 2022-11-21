describe('glob to regex generator', () => {
  it('should type glob and copy to clipboard regex', async () => {
    const glob = 'foo[a-z]';
    const regex = '/^foo\\[a-z\\]$/';
    const regexWithExtended = '/^foo[a-z]$/';

    cy.visit('/');

    // Type something to glob input
    cy.findByRole('textbox').type(glob);

    // Check if generated regex is visible
    cy.findByText(regex);

    // Enable "extended" option
    cy.findByRole('checkbox').click();

    //Check if generated regex is visible
    cy.findByText(regexWithExtended);

    // Copy to clipboard
    cy.findByRole('button').click();

    // Get and verify clipboard
    cy.window().then(async ({ navigator }) => {
      const clipboard = await navigator.clipboard.readText();

      expect(clipboard).to.eq(regexWithExtended);
    });

    // Check if alert is visible
    cy.findByText('RegExp copied to clipboard.');
  });
});

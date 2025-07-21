describe('Web testas', () => {
  it('leidžia atidaryti svetaine', () => {
    cy.visit('http://localhost:5500');
    cy.contains('Pagrindinis skyrius');
  });
});
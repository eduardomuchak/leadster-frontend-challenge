describe("Open the page and check if all sections were rendered", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Check if the header was rendered", () => {
    cy.get('[data-cy="header"]').should("be.visible");
  });
  it("Check if the Above the Fold Section was rendered", () => {
    cy.get('[data-cy="above-the-fold-section"]').should("be.visible");
  });
  it("Check if the Hero Section was rendered", () => {
    cy.get('[data-cy="hero-section"]').should("be.visible");
  });
  it("Check if the CTA Section was rendered", () => {
    cy.get('[data-cy="cta-section"]').should("be.visible");
  });
  it("Check if the footer was rendered", () => {
    cy.get('[data-cy="footer"]').should("be.visible");
  });
});

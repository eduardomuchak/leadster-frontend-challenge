describe("Tests the hero section", () => {
  beforeEach(() => {
    if (Cypress.config().baseUrl === "http://localhost:3000") {
      // Configuração para ambiente local
      Cypress.config({
        baseUrl: "http://localhost:3000",
      });
    } else {
      // Configuração para ambiente de produção
      Cypress.config({
        baseUrl: "https://eduardomuchak-leadster-frontend-challenge.vercel.app",
      });
    }
    cy.visit("");
  });

  it("Check if the Hero Section was rendered", () => {
    cy.get('[data-cy="hero-section"]').should("be.visible");
  });

  it("Check if all categories buttons were rendered", () => {
    cy.get('[data-cy="hero-section"]')
      .find('[data-cy="category-button"]')
      .should("have.length", 5);
  });

  it("Check if were only 9 card rendered", () => {
    cy.get('[data-cy="hero-section"]')
      .find('[data-cy="card"]')
      .should("have.length", 9);
  });

  it("Check if the first category button is active after click", () => {
    cy.get('[data-cy="hero-section"]')
      .find('[data-cy="category-button"]')
      .first()
      .click()
      .should("have.class", "bg-primary-blue-300");
  });

  it("Checks that after clicking on the 'Agências' category, there are only 6 cards rendered on the screen", () => {
    cy.get('[data-cy="hero-section"]')
      .find('[data-cy="category-button"]')
      .first()
      .click();

    cy.get('[data-cy="hero-section"]')
      .find('[data-cy="card"]')
      .should("have.length", 6);
  });

  it("Checks that after clicking on the 'Chatbot' category, there are only 6 cards rendered on the screen", () => {
    cy.get('[data-cy="hero-section"]')
      .find('[data-cy="category-button"]')
      .eq(1)
      .click();

    cy.get('[data-cy="hero-section"]')
      .find('[data-cy="card"]')
      .should("have.length", 6);
  });

  it("Checks that after clicking on the 'Marketing Digital' category, there are only 9 cards rendered on the screen and 2 page tabs avaible", () => {
    cy.get('[data-cy="hero-section"]')
      .find('[data-cy="category-button"]')
      .eq(2)
      .click();

    cy.get('[data-cy="hero-section"]')
      .find('[data-cy="card"]')
      .should("have.length", 9);

    cy.get('[data-cy="hero-section"]')
      .find('[data-cy="page-tab"]')
      .should("have.length", 2);
  });

  it("Checks that after clicking on the 'Marketing Digital' category and the second page tab, there are only 2 cards rendered on the screen", () => {
    cy.get('[data-cy="hero-section"]')
      .find('[data-cy="category-button"]')
      .eq(2)
      .click();

    cy.get('[data-cy="hero-section"]')
      .find('[data-cy="card"]')
      .should("have.length", 9);

    cy.get('[data-cy="hero-section"]')
      .find('[data-cy="page-tab"]')
      .should("have.length", 2);

    cy.get('[data-cy="hero-section"]')
      .find('[data-cy="page-tab"]')
      .eq(1)
      .click();

    cy.get('[data-cy="hero-section"]')
      .find('[data-cy="card"]')
      .should("have.length", 2);
  });

  it("Checks that after clicking on the 'Geração de Leads' category, there are only 7 cards rendered on the screen", () => {
    cy.get('[data-cy="hero-section"]')
      .find('[data-cy="category-button"]')
      .eq(3)
      .click();

    cy.get('[data-cy="hero-section"]')
      .find('[data-cy="card"]')
      .should("have.length", 7);
  });

  it("Checks that after clicking on the 'Mídia Paga' category, there are no cards rendered on the screen and have a message", () => {
    cy.get('[data-cy="hero-section"]')
      .find('[data-cy="category-button"]')
      .eq(1)
      .click();

    cy.get('[data-cy="hero-section"]')
      .find('[data-cy="category-button"]')
      .eq(4)
      .click();

    cy.get('[data-cy="hero-section"]')
      .find('[data-cy="card"]')
      .should("have.length", 0);

    cy.get('[data-cy="hero-section"]')
      .find('[data-cy="no-cards-message"]')
      .should("be.visible");
  });
});

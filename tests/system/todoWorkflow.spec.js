describe("Todo User Journeys", () => {

    beforeEach(() => {
        cy.visit("http://localhost:5173");
    });

    it("creates a todo", () => {

        cy.get("[data-testid='todo-input']")
            .type("Buy groceries");

        cy.get("[data-testid='add-button']")
            .click();

        cy.contains("Buy groceries");

    });

    it("toggles a todo", () => {

        cy.contains("Buy groceries")
            .click();

        cy.contains("Buy groceries")
            .should("have.class", "completed");

    });

    it("deletes a todo", () => {

        cy.get("[data-testid='delete-button']")
            .click();

        cy.contains("Buy groceries")
            .should("not.exist");

    });

});
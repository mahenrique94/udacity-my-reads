describe("Testing BooksList UI", () => {

    const COUNT_CARDS = 7
    const COUNT_BUTTON_SEARCH = 1

    it("Should have a list of books when them are fetched from API", () => {
        cy.visit("/")
        cy.get(".card").should("have.length", COUNT_CARDS)
    })

    it("Should have a button to add new books", () => {
        cy.visit("/")
        cy.get("a[href='/search']").should("have.length", COUNT_BUTTON_SEARCH)
    })

    it("Should change from currently reading shelf to want to read", () => {
        cy.visit("/")
        cy.get(".card-footer").find("a.card-footer-item").first().click()
        cy.get("a.button.is-primary").click()
        cy.get(".card").should("have.length", COUNT_CARDS)
    })

    it("Should change from currently reading shelf to read", () => {
        cy.visit("/")
        cy.get(".card-footer").find("a.card-footer-item").last().click()
        cy.get("a.button.is-primary").click()
        cy.get(".card").should("have.length", COUNT_CARDS)
    })

})

describe("Tests for BooksSearch UI", () => {

    it("Should navigate to search page", () => {
        cy.visit("/")
        cy.get("a[href='/search']").click()
        cy.url().should("include", "/search")
    })

    it("Should add new book to currenctly reading shelf", () => {
        cy.visit("/")
        cy.get("a[href='/search']").click()
        cy.get("input[name='query']").type("React")
        cy.get(".card-footer").find("a.card-footer-item").first().click()
        cy.get("a.button.is-primary").click()
        cy.get(".card").should($cards => expect($cards).to.have.length(8))
    })

    it("Should add new book to want to read shelf", () => {
        cy.visit("/")
        cy.get("a[href='/search']").click()
        cy.get("input[name='query']").type("React")
        cy.get(".card-footer").find("a.card-footer-item").last().click()
        cy.get("a.button.is-primary").click()
        cy.get(".card").should($cards => expect($cards).to.have.length(8))
    })

})

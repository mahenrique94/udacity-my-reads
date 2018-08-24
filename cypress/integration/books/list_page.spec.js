describe("Testing BooksList UI", () => {

    it("Should have a list of books when them are fetched from API", () => {
        cy.visit("/")
        cy.get(".card").should($cards => expect($cards).to.have.length(7))
    })

    it("Should have a button to add new books", () => {
        cy.visit("/")
        cy.get("a[href='/search']").should($link => expect($link).to.have.length(1))
    })

    it("Should change from currently reading shelf to want to read", () => {
        cy.visit("/")
        cy.get(".card-footer").find("a.card-footer-item").first().click()
        cy.get("a.button.is-primary").click()
        cy.get(".card").should($cards => expect($cards).to.have.length(7))
    })

    it("Should change from currently reading shelf to read", () => {
        cy.visit("/")
        cy.get(".card-footer").find("a.card-footer-item").last().click()
        cy.get("a.button.is-primary").click()
        cy.get(".card").should($cards => expect($cards).to.have.length(7))
    })

})

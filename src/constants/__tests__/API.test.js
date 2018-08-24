import { PATHS } from "../API"

describe("Tests for HTTP constant", () => {

    it("Smoke tests", () => {
        expect(PATHS).toBeDefined()
    })

    it("Should match every constant when them are correctly setted", () => {
        expect(PATHS.BOOKS).toEqual("books")
        expect(PATHS.BOOKS_SEARCH).toEqual("search")
    })

})

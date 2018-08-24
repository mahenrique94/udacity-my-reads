import { TYPES } from "../Shelf"

describe("Tests for Shelf constant", () => {

    it("Smoke tests", () => {
        expect(TYPES).toBeDefined()
    })

    it("Should match every constant when them are correctly setted", () => {
        expect(TYPES.CURRENTLY_READING).toEqual("currentlyReading")
        expect(TYPES.READ).toEqual("read")
        expect(TYPES.WANT_TO_READ).toEqual("wantToRead")
    })

})

import { CODES } from "../HTTP"

describe("Tests for HTTP constant", () => {

    it("Smoke tests", () => {
        expect(CODES).toBeDefined()
    })

    it("Should match every constant when them are correctly setted", () => {
        const EXPECTED_OK_CODE = 200
        const { OK } = CODES
        expect(OK).toEqual(EXPECTED_OK_CODE)
    })

})

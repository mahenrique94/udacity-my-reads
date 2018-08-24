import { handleError, handleSuccess } from "../http"

describe("Tests for http utils", () => {

    it("Smoke tests", () => {
        expect(handleError).toBeDefined()
        expect(handleSuccess).toBeDefined()
    })

})

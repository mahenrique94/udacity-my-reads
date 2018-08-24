import { TIMES } from "../time"

describe("Tests for time utils", () => {

    it("Smoke tests", () => {
        expect(TIMES).toBeDefined()
    })

    it("Should match every time with your respective values when them was correctly setted", () => {
        const EXPECTED_HALF_SECOND = 500
        const EXPECTED_TEN_SECONDS = 10000
        const { HALF_SECOND, TEN_SECONDS } = TIMES
        expect(HALF_SECOND).toEqual(EXPECTED_HALF_SECOND)
        expect(TEN_SECONDS).toEqual(EXPECTED_TEN_SECONDS)
    })

})

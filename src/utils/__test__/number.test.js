import { generateRandomNum } from "../number"

describe("Tests for number utils", () => {

    it("Smoke tests", () => {
        expect(generateRandomNum).toBeDefined()
    })

    it("Should return 1 when it was provided for min and max parameters", () => {
        const RANDOM_NUM = 1
        expect(generateRandomNum(RANDOM_NUM, RANDOM_NUM)).toEqual(RANDOM_NUM)
    })

    it("Should return 10 when it was provided for min and max parameters", () => {
        const RANDOM_NUM = 10
        expect(generateRandomNum(RANDOM_NUM, RANDOM_NUM)).toEqual(RANDOM_NUM)
    })

    it("Should return 65 when it was provided for min and max parameters", () => {
        const RANDOM_NUM = 65
        expect(generateRandomNum(RANDOM_NUM, RANDOM_NUM)).toEqual(RANDOM_NUM)
    })

    it("Should return 100 when it was provided for min and max parameters", () => {
        const RANDOM_NUM = 100
        expect(generateRandomNum(RANDOM_NUM, RANDOM_NUM)).toEqual(RANDOM_NUM)
    })

})

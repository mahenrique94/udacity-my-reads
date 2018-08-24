import { routes } from "../routes"

import NotFound from "../NotFound"

describe("Tests for NotFound routes", () => {

    it("Smoke tests", () => {
        expect(routes).toBeDefined()
    })

    it("Should return an array of routes when the component has routes", () => {
        const expectedRoutes = [
            { component: NotFound }
        ]
        expect(routes).toEqual(expectedRoutes)
    })

})

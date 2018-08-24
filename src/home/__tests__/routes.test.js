import { routes } from "../routes"

import Home from "../pages/Home"

describe("Tests for Home routes", () => {

    it("Smoke tests", () => {
        expect(routes).toBeDefined()
    })

    it("Should return an array of routes when the component has routes", () => {
        const expectedRoutes = [
            { component: Home, name: "home", path: "/" }
        ]
        expect(routes).toEqual(expectedRoutes)
    })

})

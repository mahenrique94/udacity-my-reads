import { _combineRoutes } from "../routes"

describe("Tests for routes utils", () => {

    const homeRoutes = [ { component: "Home", path: "/" } ]
    const notFoundRoutes = [ { component: "NotFound" } ]

    it("Smoke tests", () => {
        expect(_combineRoutes).toBeDefined()
    })

    it("Should return home routes when just provide routes of the home component", () => {
        expect(_combineRoutes(homeRoutes)).toEqual(homeRoutes)
    })

    it("Should return home and not found routes when just them was provided", () => {
        const [ homeRoute ] = homeRoutes
        const [ notFoundRoute ] = notFoundRoutes
        const combinedRoutes = [ homeRoute, notFoundRoute ]
        expect(_combineRoutes(homeRoutes, notFoundRoutes)).toEqual(combinedRoutes)
    })

})

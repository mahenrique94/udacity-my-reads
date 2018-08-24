import React from "react"
import renderer from "react-test-renderer"

import App from "../App"

describe("Tests for App component", () => {

    it.skip("Should rendering without crash", () => {
        const tree = renderer.create(
            <App>
                <h1>Should rendering without crash</h1>
            </App>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

})

import React from "react"
import renderer from "react-test-renderer"

import Confirm from "../Confirm.js"

describe("Tests for Confirm component", () => {

    const requiredProps = {
        message: "Testing",
        onConfirm: () => console.log("Testing"),
        title: "Test"
    }

    it("Should rendering without crashing", () => {
        const tree = renderer.create(
            <Confirm { ...requiredProps }>
                <button type="button">Click me</button>
            </Confirm>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

})

import React from "react"
import renderer from "react-test-renderer"

import Action from "../Action.js"

describe("Tests for Action component", () => {

    const requiredProps = {
        action: () => console.log("Testing"),
        text: "Testing"
    }

    it("Should rendering without crashing", () => {
        const tree = renderer.create(
            <Action { ...requiredProps }/>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it("Should rendering with message when it was provided", () => {
        const tree = renderer.create(
            <Action { ...requiredProps } message="I'm a message"/>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

})

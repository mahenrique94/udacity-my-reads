import React from "react"
import renderer from "react-test-renderer"

import Date from "../Date.js"

describe("Tests for Date component", () => {

    const requiredProps = {
        date: "01/01/2018"
    }

    it("Should rendering without crashing", () => {
        const tree = renderer.create(
            <Date { ...requiredProps }/>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

})

import React from "react"
import renderer from "react-test-renderer"

import Button from "../Button.js"

describe("Tests for Button component", () => {

    it("Should rendering without crashing", () => {
        const tree = renderer.create(
            <Button/>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it("Should rendering with bottom when it was provided", () => {
        const tree = renderer.create(
            <Button bottom/>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it("Should rendering with float when it was provided", () => {
        const tree = renderer.create(
            <Button float/>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it("Should rendering with position when it was provided", () => {
        const tree = renderer.create(
            <Button position/>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it("Should rendering with right when it was provided", () => {
        const tree = renderer.create(
            <Button right/>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it("Should rendering with to when it was provided", () => {
        const tree = renderer.create(
            <Button to="test"/>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })

})

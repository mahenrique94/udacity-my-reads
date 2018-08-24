import React from "react"
import PropTypes from "prop-types"

import i18n from "i18n"

import { Form, Navbar } from "react-bulma-components"

const Search = ({ handleChange, query }) => (

    <Navbar.Item renderAs="div">
        <Form.Field style={ { width: "375px" } }>
            <Form.Control>
                <Form.Input
                    name="query"
                    onChange={ handleChange }
                    placeholder={ i18n.t("placeholders.search") }
                    value={ query }
                />
            </Form.Control>
        </Form.Field>
    </Navbar.Item>

)

Search.propTypes = {
    handleChange: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired
}

export default Search

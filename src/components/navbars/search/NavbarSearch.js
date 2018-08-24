import PropTypes from "prop-types"
import React from "react"

import i18n from "i18n"
import { routes } from "routes"

import { Navbar } from "react-bulma-components"

import Link from "components/Link"
import Search from "./Search"

const NavbarSearch = ({ handleChange, query }) => (

    <Navbar color="info" style={ { width: "100%" } }>
        <Navbar.Brand>
            <Navbar.Item renderAs="div">
                <Link to={ routes.home }>{ i18n.t("titles.app") }</Link>
            </Navbar.Item>
        </Navbar.Brand>
        <Search handleChange={ handleChange } query={ query }/>
    </Navbar>

)

NavbarSearch.propTypes = {
    handleChange: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired
}

export default NavbarSearch

import React, { Fragment } from "react"
import PropTypes from "prop-types"

const App = ({ children }) => <Fragment>{ children }</Fragment>

App.propTypes = {
    children: PropTypes.object.isRequired
}

export default App

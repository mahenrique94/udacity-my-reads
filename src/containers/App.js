import PropTypes from "prop-types"
import React, { Fragment } from "react"

const App = ({ children }) => <Fragment>{ children }</Fragment>

App.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]).isRequired
}

export default App

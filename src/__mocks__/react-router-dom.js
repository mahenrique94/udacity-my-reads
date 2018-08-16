import React from "react"
import PropTypes from "prop-types"

const Link = ({ children }) => <a>{ children }</a>

Link.defaultProps = {
    children: {}
}

Link.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.string
    ])
}

export { Link }

import PropTypes from "prop-types"

const If = ({ children, condition, el }) => condition ? children : el

If.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired,
    condition: PropTypes.bool.isRequired,
    el: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
        PropTypes.string
    ]).isRequired
}

export default If

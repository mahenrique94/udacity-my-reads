import moment from "moment"
import PropTypes from "prop-types"
import React from "react"

import i18n from "i18n"

const Date = ({ date, extensive, format }) => {

    const formatDate = () => {
        if (extensive) {
            return moment(date).locale(i18n.language).format("DD \\d\\e MMMM \\d\\e YYYY")
        }
        return moment(date).locale(i18n.language).format(format)
    }

    return <time>{ formatDate() }</time>

}

Date.defaultProps = {
    extensive: false,
    format: "DD/MM/YY"
}

Date.propTypes = {
    date: PropTypes.string.isRequired,
    extensive: PropTypes.bool,
    format: PropTypes.string
}

export default Date

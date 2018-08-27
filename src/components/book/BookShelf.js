import React from "react"
import PropTypes from "prop-types"

import i18n from "i18n"

import { Tag } from "react-bulma-components"

const BookShelf = ({ shelf }) => <Tag color="primary">{ i18n.t(`titles.${shelf || "none"}`) }</Tag>

BookShelf.defaultProps = {
    shelf: ""
}

BookShelf.propTypes = {
    shelf: PropTypes.string
}

export default BookShelf

import PropTypes from "prop-types"
import React from "react"

import { Tag } from "react-bulma-components"

const BookCategories = ({ categories }) => categories.map(category => <Tag color="info" key={ category }>{ category }</Tag>)

BookCategories.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string)
}

export default BookCategories

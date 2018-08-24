import React from "react"
import PropTypes from "prop-types"

import { Heading } from "react-bulma-components"

const BookTitle = ({ title }) => <Heading renderAs="h5" size={ 5 }>{ title }</Heading>

BookTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default BookTitle

import PropTypes from "prop-types"
import React from "react"

import { Heading } from "react-bulma-components"

const BookAuthors = ({ authors }) =>
    authors.map(
        author => <Heading key={ author } renderAs="h6" size={ 6 } style={ { marginBottom: ".25rem" } } subtitle>{ author }</Heading>
    )

BookAuthors.propTypes = {
    authors: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default BookAuthors

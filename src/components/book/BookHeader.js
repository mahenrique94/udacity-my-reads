import React from "react"
import PropTypes from "prop-types"

import { Media } from "react-bulma-components"

import BookAuthors from "./BookAuthors"
import BookTitle from "./BookTitle"

const BookHeader = ({ authors, title }) => (

    <Media>
        <Media.Item>
            <BookTitle title={ title }/>
            <BookAuthors authors={ authors }/>
        </Media.Item>
    </Media>

)

BookHeader.propTypes = {
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired
}

export default BookHeader

import React from "react"
import PropTypes from "prop-types"

import { Media } from "react-bulma-components"

import BookAuthors from "./BookAuthors"
import BookShelf from "./BookShelf"
import BookTitle from "./BookTitle"

const BookHeader = ({ authors, shelf, title }) => (

    <Media>
        <Media.Item>
            <BookTitle title={ title }/>
            <BookAuthors authors={ authors }/>
            <BookShelf shelf={ shelf }/>
        </Media.Item>
    </Media>

)

BookHeader.defaultProps = {
    shelf: ""
}

BookHeader.propTypes = {
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    shelf: PropTypes.string,
    title: PropTypes.string.isRequired
}

export default BookHeader

import PropTypes from "prop-types"
import React from "react"

import { Card } from "react-bulma-components"

import BookCategories from "./BookCategories"
import BookContent from "./BookContent"
import BookFooter from "./BookFooter"
import BookHeader from "./BookHeader"
import BookImage from "./BookImage"
import BookInfo from "./BookInfo"

const Book = ({
    authors,
    categories,
    contentVersion,
    description,
    id,
    imageLinks,
    language,
    pageCount,
    publishedDate,
    shelf,
    title,
    updateShelfs
}) => (

    <Card>
        <BookImage imageLinks={ imageLinks }/>
        <Card.Content>
            <BookHeader authors={ authors } title={ title }/>
            <BookContent content={ description }/>
            <BookInfo
                contentVersion={ contentVersion }
                language={ language }
                pageCount={ pageCount }
                publishedDate={ publishedDate }
            />
            <BookCategories categories={ categories }/>
        </Card.Content>
        <BookFooter id={ id } shelf={ shelf } updateShelfs={ updateShelfs }/>
    </Card>

)

Book.defaultProps = {
    authors: [],
    categories: [],
    contentVersion: "",
    description: "",
    id: "",
    imageLinks: {},
    language: "",
    pageCount: 0,
    publishedDate: "",
    shelf: "",
    title: ""
}

Book.propTypes = {
    authors: PropTypes.arrayOf(PropTypes.string),
    categories: PropTypes.arrayOf(PropTypes.string),
    contentVersion: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    imageLinks: PropTypes.object,
    language: PropTypes.string,
    pageCount: PropTypes.number,
    publishedDate: PropTypes.string,
    shelf: PropTypes.string,
    title: PropTypes.string,
    updateShelfs: PropTypes.func.isRequired
}

export default Book

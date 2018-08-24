import React from "react"

import BooksContext from "../contexts/BooksContext"

import BooksList from "../pages/BooksList"

const Books = () => (

    <BooksContext.Consumer>
        { ({ shelfs, updateShelfs }) => <BooksList shelfs={ shelfs } updateShelfs={ updateShelfs }/> }
    </BooksContext.Consumer>

)

export default Books

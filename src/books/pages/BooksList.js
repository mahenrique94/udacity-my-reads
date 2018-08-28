import _ from "lodash"
import PropTypes from "prop-types"
import React, { Fragment } from "react"

import { routes } from "routes"

import Button from "components/Button"

import Icon from "components/Icon"
import List from "@/books/components/List"

const BooksList = ({ shelfs, updateShelfs }) => (

    <Fragment>
        <List shelfs={ shelfs } updateShelfs={ updateShelfs }/>
        <Button bottom float position right to={ routes.booksSearch }><Icon icon="plus"/></Button>
    </Fragment>

)

BooksList.propTypes = {
    shelfs: PropTypes.object.isRequired,
    updateShelfs: PropTypes.func.isRequired
}

export default BooksList

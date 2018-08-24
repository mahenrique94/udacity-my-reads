import React from "react"
import PropTypes from "prop-types"

import { Card } from "react-bulma-components"

const BookImage = ({ imageLinks: { smallThumbnail } }) => <Card.Image size="4by3" src={ smallThumbnail }/>

BookImage.propTypes = {
    imageLinks: PropTypes.object.isRequired
}

export default BookImage

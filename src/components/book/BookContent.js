import PropTypes from "prop-types"
import React from "react"

import { Content } from "react-bulma-components"

const MIN_CHARACTER = 0
const MAX_CHARACTER = 255

const BookContent = ({ content }) => (

    <Content size="small" style={ { textAlign: "justify" } }>
        { `${content.substring(MIN_CHARACTER, MAX_CHARACTER)}...` }
    </Content>

)

BookContent.propTypes = {
    content: PropTypes.string.isRequired
}

export default BookContent

import PropTypes from "prop-types"
import React from "react"

import i18n from "i18n"

import { Card } from "react-bulma-components"

import Confirm from "./Confirm"
import Show from "./Show"

const Action = ({ action, show, text }) => (

    <Show only={ show }>
        <Confirm
            message={ i18n.t("messages.books.updateShelf") }
            onConfirm={ action }
            title={ i18n.t("titles.books.action") }
        >
            <Card.Footer.Item onClick={ action } renderAs="a">
                { text }
            </Card.Footer.Item>
        </Confirm>
    </Show>

)

Action.defaultProps = {
    show: false
}

Action.propTypes = {
    action: PropTypes.func.isRequired,
    show: PropTypes.bool,
    text: PropTypes.string.isRequired
}

export default Action

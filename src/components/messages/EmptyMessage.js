import React from "react"

import i18n from "i18n"

import { Message } from "react-bulma-components"

const EmptyMessage = () => (

    <Message color="info" style={ { width: "100%" } }>
        <Message.Body>{ i18n.t("messages.empty") }</Message.Body>
    </Message>

)

export default EmptyMessage

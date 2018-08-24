import React from "react"

import i18n from "i18n"

import { Message } from "react-bulma-components"

const NoDataMessage = () => (

    <Message color="warning" style={ { marginTop: "2rem", width: "100%" } }>
        <Message.Body>{ i18n.t("messages.no.data") }</Message.Body>
    </Message>

)

export default NoDataMessage

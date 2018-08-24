import React from "react"
import PropTypes from "prop-types"

import i18n from "i18n"

import Date from "components/Date"
import List from "components/list/List"

const BookInfo = ({ contentVersion, language, pageCount, publishedDate }) => (

    <List>
        <List.Item><b>{ i18n.t("label.pages") }:</b> { pageCount }</List.Item>
        <List.Item><b>{ i18n.t("label.version") }:</b> { contentVersion }</List.Item>
        <List.Item><b>{ i18n.t("label.language") }:</b> { i18n.t(`language.${language}`) }</List.Item>
        <List.Item><b>{ i18n.t("label.publishedDate") }:</b> <Date date={ publishedDate } extensive/></List.Item>
    </List>

)

BookInfo.propTypes = {
    contentVersion: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    pageCount: PropTypes.number.isRequired,
    publishedDate: PropTypes.string.isRequired
}

export default BookInfo

import { TYPES } from "@/constants/Shelf"

import _ from "lodash"
import PropTypes from "prop-types"
import React, { Component, Fragment } from "react"
import styled from "styled-components"

import { NotificationManager } from "react-notifications"

import i18n from "i18n"
import { routes } from "routes"

import { updateShelf } from "@/books/api"

import { navigateTo } from "utils/browser"

import { Card, Loader } from "react-bulma-components"

import Action from "components/Action"
import If from "components/If"

const StyledBookFooter = styled(Card.Footer)`
    font-size: .8rem;
    ${({ centered }) => centered ? "justify-content: center;" : ""}
    .card-footer-item {
        padding: .5rem .25rem;
    }
`

class BookFooter extends Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        shelf: PropTypes.string.isRequired,
        updateShelfs: PropTypes.func.isRequired
    }

    state = {
        loading: false
    }

    render() {
        const { shelf } = this.props
        const { loading } = this.state
        return (
            <StyledBookFooter centered={ loading }>
                <If condition={ !loading } el={ this.loading() }>
                    <If condition={ !!shelf } el={ null }>
                        <Card.Footer.Item>
                            { `${i18n.t("label.moveTo")}:` }
                        </Card.Footer.Item>
                    </If>
                    { this.renderStored(shelf) }
                    { this.renderCurrentlyReading(shelf) }
                    { this.renderWantToRead(shelf) }
                    { this.renderRead(shelf) }
                </If>
            </StyledBookFooter>
        )
    }

    loading = () => <Loader style={ { height: "25px", margin: ".5rem 1rem", width: "25px" } }/>

    renderCurrentlyReading(shelf) {
        const mustBeShow = shelf === TYPES.CURRENTLY_READING
        return (
            <Fragment>
                <Action
                    action={ () => this.updateShelf(TYPES.WANT_TO_READ) }
                    show={ mustBeShow }
                    text={ i18n.t("titles.wantToRead") }
                />
                <Action
                    action={ () => this.updateShelf(TYPES.READ) }
                    show={ mustBeShow }
                    text={ i18n.t("titles.read") }
                />
            </Fragment>
        )
    }

    renderRead(shelf) {
        const mustBeShow = shelf === TYPES.READ
        return (
            <Fragment>
                <Action
                    action={ () => this.updateShelf(TYPES.CURRENTLY_READING) }
                    show={ mustBeShow }
                    text={ i18n.t("titles.currentlyReading") }
                />
                <Action
                    action={ () => this.updateShelf(TYPES.WANT_TO_READ) }
                    show={ mustBeShow }
                    text={ i18n.t("titles.wantToRead") }
                />
            </Fragment>
        )
    }

    renderWantToRead(shelf) {
        const mustBeShow = shelf === TYPES.WANT_TO_READ
        return (
            <Fragment>
                <Action
                    action={ () => this.updateShelf(TYPES.CURRENTLY_READING) }
                    show={ mustBeShow }
                    text={ i18n.t("titles.currentlyReading") }
                />
                <Action
                    action={ () => this.updateShelf(TYPES.READ) }
                    show={ mustBeShow }
                    text={ i18n.t("titles.read") }
                />
            </Fragment>
        )
    }

    renderStored(shelf) {
        if (_.isEmpty(shelf)) {
            return (
                <Fragment>
                    <Action
                        action={ () => this.updateShelf(TYPES.CURRENTLY_READING) }
                        show
                        text={ i18n.t("titles.currentlyReading") }
                    />
                    <Action
                        action={ () => this.updateShelf(TYPES.READ) }
                        show
                        text={ i18n.t("titles.read") }
                    />
                    <Action
                        action={ () => this.updateShelf(TYPES.WANT_TO_READ) }
                        show
                        text={ i18n.t("titles.wantToRead") }
                    />
                </Fragment>
            )
        }
    }

    updateShelf = newShelf => {
        const { id, updateShelfs } = this.props
        this.setState({ loading: true })
        updateShelf(id, newShelf)
            .then(updateShelfs)
            .then(() => NotificationManager.success(i18n.t("messages.books.updated"), i18n.t("titles.books.action")))
            .then(() => navigateTo(routes.home))
            .finally(() => this.setState({ loading: false }))
    }

}

export default BookFooter

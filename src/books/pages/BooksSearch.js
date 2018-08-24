import _ from "lodash"
import React, { Component, Fragment } from "react"

import { search } from "../api"

import { routes } from "routes"

import { TIMES } from "utils/time"

import BooksContext from "../contexts/BooksContext"

import { Columns, Container, Section } from "react-bulma-components"

import Book from "components/book/Book"
import Button from "components/Button"
import Icon from "components/Icon"
import If from "components/If"
import NavbarSearch from "components/navbars/search/NavbarSearch"
import NoDataMessage from "components/messages/NoDataMessage"
import PageLoader from "components/PageLoader"

class BooksSearch extends Component {

    state = {
        books: [],
        query: "",
        searching: false,
        timeout: null
    }

    render() {
        const { books, query, searching } = this.state
        return (
            <Fragment>
                <NavbarSearch handleChange={ this.handleChange } query={ query }/>
                <Section>
                    <Container>
                        <If condition={ !searching } el={ <PageLoader/> }>
                            <If condition={ !_.isEmpty(books) } el={ <NoDataMessage/> }>
                                <Columns>
                                    { books.map(book => (
                                        <Columns.Column key={ book.id } size={ 4 }>
                                            <BooksContext.Consumer>
                                                { ({ updateShelfs }) => <Book { ...book } updateShelfs={ updateShelfs }/> }
                                            </BooksContext.Consumer>
                                        </Columns.Column>
                                    )) }
                                </Columns>
                            </If>
                        </If>
                    </Container>
                </Section>
                <Button bottom float position to={ routes.home }><Icon icon="chevron-left"/></Button>
            </Fragment>
        )
    }

    handleChange = (({ target: { value } }) => {
        const { timeout } = this.state
        clearTimeout(timeout)
        this.setState({
            query: value,
            searching: !!value,
            timeout: value
                ? setTimeout(() =>
                    search(value).then(({ books }) =>
                        this.setState({ books: books.error ? [] : books, searching: false }))
                , TIMES.HALF_SECOND)
                : null
        })
    })

}

export default BooksSearch
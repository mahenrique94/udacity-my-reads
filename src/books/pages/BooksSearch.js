import _ from "lodash"
import React, { Component, Fragment } from "react"

import { routes } from "routes"

import { getAll, search } from "../api"

import { createShelfs } from "utils/api"

import { Container, Section } from "react-bulma-components"

import Button from "components/Button"
import Icon from "components/Icon"
import If from "components/If"
import List from "@/books/components/List"
import NavbarSearch from "components/navbars/search/NavbarSearch"
import PageLoader from "components/PageLoader"

class BooksSearch extends Component {

    state = {
        query: "",
        searching: false,
        shelfs: [],
        timeout: null
    }

    render() {
        const { query, searching, shelfs } = this.state
        return (
            <Fragment>
                <NavbarSearch handleChange={ this.handleChange } query={ query }/>
                <Section>
                    <Container>
                        <If condition={ !searching } el={ <PageLoader/> }>
                            <List shelfs={ shelfs }/>
                        </If>
                    </Container>
                </Section>
                <Button bottom float position to={ routes.home }><Icon icon="chevron-left"/></Button>
            </Fragment>
        )
    }

    handleChange = (({ target: { value } }) => {
        this.setState({
            query: value,
            searching: !!value
        }, () => {
            const { timeout } = this.state
            clearTimeout(timeout)
            search(value)
                .then(({ books }) => {
                    getAll()
                        .then(({ books: shelfBooks, shelfs }) => {
                            const list = {}
                            if (Array.isArray(books)) {
                                const updatedBooks = books.map(book => {
                                    const finded = shelfBooks.find(bookShelf => bookShelf.id === book.id)
                                    if (finded) {
                                        book.shelf = finded.shelf
                                    }
                                    return book
                                })
                                createShelfs(updatedBooks, list)
                                this.setState({ searching: false, shelfs: list })
                            }
                        }).catch(() => this.setState({ searching: false, shelfs: [] }))
                })
                .catch(() => this.setState({ searching: false, shelfs: [] }))
        })
    })

}

export default BooksSearch

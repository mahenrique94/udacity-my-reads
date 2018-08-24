import PropTypes from "prop-types"
import React, { Component, Fragment } from "react"

import { getAll } from "@/books/api"

import BooksContext from "@/books/contexts/BooksContext"

import { loading } from "hoc/loading"

class App extends Component {

    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object
        ]).isRequired,
        shelfs: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            shelfs: props.shelfs,
            updateShelfs: this.updateShelfs
        }
    }

    render() {
        const { children } = this.props
        return (
            <Fragment>
                <BooksContext.Provider value={ this.state }>
                    { children }
                </BooksContext.Provider>
            </Fragment>
        )
    }

    updateShelfs = newShelfs => this.setState({ shelfs: newShelfs })

}

export default loading(getAll)(App)

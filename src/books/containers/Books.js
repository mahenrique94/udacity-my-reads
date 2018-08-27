import React, { Component } from "react"
import PropTypes from "prop-types"

import { getAll } from "../api"

import BooksList from "../pages/BooksList"

import { loading } from "hoc/loading"

class Books extends Component {

    static propTypes = {
        shelfs: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            shelfs: props.shelfs
        }
    }

    render() {
        const { shelfs } = this.state
        return <BooksList shelfs={ shelfs } updateShelfs={ this.updateShelfs }/>
    }

    updateShelfs = newShelfs => this.setState({ shelfs: newShelfs })

}

export default loading(getAll)(Books)

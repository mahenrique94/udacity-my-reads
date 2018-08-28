import _ from "lodash"
import PropTypes from "prop-types"
import React from "react"

import i18n from "i18n"

import { Columns, Container, Section as BSection, Tabs } from "react-bulma-components"

import Book from "components/book/Book"
import EmptyMessage from "components/messages/EmptyMessage"
import If from "components/If"
import NoDataMessage from "components/messages/NoDataMessage"
import Section from "components/Section"

const List = ({ shelfs, updateShelfs }) => (

    <If condition={ !_.isEmpty(shelfs) } el={ NoDataMessage }>
        <BSection>
            <Container>
                { Object.entries(shelfs).map(([ shelf, books ]) => (
                    <Section key={ shelf }>
                        <Tabs>
                            <Tabs.Tab>{ i18n.t(`titles.${shelf}`) }</Tabs.Tab>
                        </Tabs>
                        <If condition={ !_.isEmpty(books) } el={ EmptyMessage }>
                            <Columns>
                                { books.map(book => (
                                    <Columns.Column key={ book.id } size={ 4 }>
                                        <Book { ...book } updateShelfs={ updateShelfs }/>
                                    </Columns.Column>
                                )) }
                            </Columns>
                        </If>
                    </Section>
                )) }
            </Container>
        </BSection>
    </If>

)

List.propTypes = {
    shelfs: PropTypes.object.isRequired,
    updateShelfs: PropTypes.func.isRequired
}

export default List

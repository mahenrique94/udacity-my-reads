import React, { Fragment } from "react"
import PropTypes from "prop-types"

import { Container, Section } from "react-bulma-components"

const App = ({ children }) => (
    <Fragment>
        <Section>
            <Container>
                { children }
            </Container>
        </Section>
    </Fragment>
)

App.propTypes = {
    children: PropTypes.object.isRequired
}

export default App

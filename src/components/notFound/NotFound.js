import React from "react"

import { Link } from "react-router-dom"

import i18n from "i18n"

import { Container, Heading, Hero } from "react-bulma-components"

const NotFound = () => (
    <Hero color="danger">
        <Hero.Body>
            <Container>
                <Heading>
                    { i18n.t("titles.notFound") }
                </Heading>
                <Heading renderAs="h2" size={ 4 } subtitle>
                    { i18n.t("subtitles.notFound") }
                </Heading>
                <Link to="/">{ i18n.t("buttons.backHome") }</Link>
            </Container>
        </Hero.Body>
    </Hero>
)

export default NotFound

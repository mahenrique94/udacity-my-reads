import React from "react"

import i18n from "i18n"

import { Container, Heading, Hero } from "react-bulma-components"

const Home = () => (
    <Hero color="info">
        <Hero.Body>
            <Container>
                <Heading>
                    { i18n.t("titles.app") }
                </Heading>
            </Container>
        </Hero.Body>
    </Hero>
)

export default Home

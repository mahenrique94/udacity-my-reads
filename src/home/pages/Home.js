import React, { Fragment } from "react"

import { Link } from "react-router-dom"

import i18n from "i18n"
import { routes } from "routes"

import { Container, Heading, Hero } from "react-bulma-components"

import Books from "@/books/containers/Books"

const Home = () => (

    <Fragment>
        <Hero color="info">
            <Hero.Body>
                <Container>
                    <Heading>
                        <Link to={ routes.home }>{ i18n.t("titles.app") }</Link>
                    </Heading>
                </Container>
            </Hero.Body>
        </Hero>
        <Books/>
    </Fragment>
)

export default Home

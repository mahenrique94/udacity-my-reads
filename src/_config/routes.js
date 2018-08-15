import React from "react"
import { Route, Router, Switch } from "react-router"

import { _combineRoutes } from "utils/routes"

import { routes as homeRoutes } from "@/home/routes"
import { routes as notFoundRoutes } from "@/components/notFound/routes"

import { history } from "./history"

const routes = () => (
    <Router history={ history }>
        <Switch>
            {
                _combineRoutes(
                    homeRoutes,
                    notFoundRoutes
                ).map((route, index) => <Route { ...route } exact key={ index }/>) }
        </Switch>
    </Router>
)

export default routes

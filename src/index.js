import React from "react"
import ReactDOM from "react-dom"

import { NotificationContainer } from "react-notifications"

import Routes from "routes"

import App from "containers/App"

import "cfg/moment"
import "cfg/style"

ReactDOM.render(
    <App>
        <NotificationContainer/>
        <Routes/>
    </App>,
    document.getElementById("root")
)

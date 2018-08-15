import React from "react"
import ReactDOM from "react-dom"

import Routes from "cfg/routes"

import App from "@/container/app/App"

import "cfg/style"

ReactDOM.render(
    <App>
        <Routes/>
    </App>,
    document.getElementById("root")
)

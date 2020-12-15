import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { PilotLog } from "./components/PilotLog"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <PilotLog />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
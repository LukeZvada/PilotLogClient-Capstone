import React from "react"
import { Route } from "react-router-dom"
import { FlightLogProvider } from "./Dashboard/FlightLogProvider"
import { FlightLogList } from "./Dashboard/FlightLogList"


export const ApplicationViews = () => {
    return <>

        <FlightLogProvider>
            <FlightLogList />
        </FlightLogProvider>

        <Route path="/logout" render={
            (props) => {
                localStorage.removeItem("pilotLogUser_id")
                props.history.push("/login")
            }
        } />
    </>
}
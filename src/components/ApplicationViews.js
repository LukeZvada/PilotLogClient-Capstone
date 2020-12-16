import React from "react"
import { Route } from "react-router-dom"
import { FlightLogProvider } from "./Dashboard/FlightLogProvider"
import { FlightLogList } from "./Dashboard/FlightLogList"
import { FlightLogStatistics } from "./Dashboard/FlightLogStatistics"


export const ApplicationViews = () => {
    return <>

        <FlightLogProvider>
            <Route exact path="/dashboard" render={(props) => {
                            return <> 
                                <FlightLogStatistics />
                                <FlightLogList history={props.history} />
                            </>
                        }} />
        </FlightLogProvider>

        <Route path="/logout" render={
            (props) => {
                localStorage.removeItem("pilotLogUser_id")
                props.history.push("/login")
            }
        } />
    </>
}
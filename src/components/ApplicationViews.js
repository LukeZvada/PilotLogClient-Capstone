import React from "react"
import { Route } from "react-router-dom"
import { FlightLogProvider } from "./Dashboard/FlightLogProvider"
import { FlightLogList } from "./Dashboard/FlightLogList"
import { FlightLogStatistics } from "./Dashboard/FlightLogStatistics"
import { MetarProvider } from "./METARS/MetarsProvider"
import { MetarList } from "./METARS/MetarsList"
import { FlightLogHeader } from "./Dashboard/FlightLogHeader"
import { FlightLogUserProvider } from "./Dashboard/UserProfileProvider"
import { FlightForm } from "./Dashboard/FlightLogForm"
import { FullFlightDetails } from "./Dashboard/FullFlightLogDetails"



export const ApplicationViews = () => {
    return <>

        <FlightLogProvider>
            <FlightLogUserProvider>
                <Route exact path="/dashboard" render={(props) => {
                    return <> 
                                    <FlightLogHeader history={props.history}/>
                                    <FlightLogStatistics />
                                    <FlightLogList history={props.history} />
                                </>
                            }} />
                <Route exact path="/lognewflight" render={(props) => {
                    return <> 
                                    <FlightForm {...props}/>
                                </>
                            }} />
                <Route exact path="/flightdetails/:flightId(\d+)" render={(props) => {
                    return <> 
                                    <FullFlightDetails {...props} />
                                </>
                            }} />
            </FlightLogUserProvider>
        </FlightLogProvider>

        <MetarProvider>
            <Route exact path="/metars" render={(props) => {
                                return <> 
                                    <MetarList history={props.history} />
                                </>
                            }} />
        </MetarProvider>

        <Route path="/logout" render={
            (props) => {
                localStorage.removeItem("pilotLogUser_id")
                props.history.push("/login")
            }
        } />
    </>
}
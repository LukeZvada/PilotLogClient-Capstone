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
import { AirportInfoList } from "./AirportInformation/AirportInformationList"
import { AirportInfoProvider } from "./AirportInformation/AirportInformationProvider"



export const ApplicationViews = () => {
    return <>
        <div className="page-content">
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
                    <Route path="/newlog/edit/:flightId(\d+)" render ={(props) => {
                            return <FlightForm {...props}/>
                        }}></Route>
                </FlightLogUserProvider>
            </FlightLogProvider>

            <MetarProvider>
                <Route exact path="/metars" render={(props) => {
                                    return <> 
                                        <MetarList history={props.history} />
                                    </>
                                }} />
            </MetarProvider>
            <AirportInfoProvider>
                <Route exact path="/airportinformation" render={(props) => {
                                    return <> 
                                        <AirportInfoList history={props.history} />
                                    </>
                                }} />
            </AirportInfoProvider>

            <Route path="/logout" render={
                (props) => {
                    localStorage.removeItem("pilotLogUser_id")
                    props.history.push("/login")
                }
            } />
        </div>
    </>
}
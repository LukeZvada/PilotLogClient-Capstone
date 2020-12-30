import React, { useContext, useEffect, useState } from "react"
import { FlightLogContext } from "./FlightLogProvider"
import "./FlightLogDashboard.css"
import Button from '@material-ui/core/Button';



export const FlightLogList = (props) => {
    const { flights, getFlights } = useContext(FlightLogContext)
    const { userFlights, getUserFlights } = useContext(FlightLogContext)
    const currentUserId = parseInt(localStorage.getItem("pilotLogUser_Id"))

    useEffect(() => {
        getFlights()
        getUserFlights(currentUserId)
    }, [])

    return (
        <>
            <article>
                <div className="flightlog_title">LOGGED FLIGHTS</div>
            </article>
            <article className="flightlog-card">
            {
                userFlights.map(flight => {
                    return <section>
                        <div className="card" style={{width: "20rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">{flight.to} &rarr; {flight.fromAirport}</h5>
                                <h6 className="card-subtitle mb-2 text-muted log-date">Date: {flight.date}</h6>
                                <div className="divider">________________________________________</div>
                                <p>Total Flight Time: {flight.total_flight_time}</p>
                                <p>Total Landings: {flight.landingsDay}</p>
                                <p>Aircraft: {flight.make_and_model}</p>
                                <p>Aircraft Ident No.: {flight.aircraftId}</p>
                                <Button className="flightsDetailsButton" 
                                        onClick={() => {
                                                props.history.push(`/flightdetails/${flight.id}`)
                                        }}>View Full Log
                                </Button>
                            </div>
                        </div>
                    </section>
                })
            }   
            </article>
        </>
    )
}

import React, { useContext, useEffect, useState } from "react"
import { FlightLogContext } from "./FlightLogProvider"
import "./FlightLogDashboard.css"


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
                <div><h2 className="flightstatistics">Flight Statistics</h2></div>
            </article>
            <article className="flightlog-card">
            {
                userFlights.map(flight => {
                    return <section>
                        <div className="card" style={{width: "20rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">To: {flight.to} - From: {flight.fromAirport}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Date: {flight.date}</h6>
                                <p>Total Flight Time: {flight.total_flight_time}</p>
                                <p>Total Landings: {flight.landingsDay}</p>
                                <p>Aircraft: {flight.make_and_model}</p>
                                <p>Aircraft Ident No.: {flight.aircraftId}</p>
                                <a href="#" className="card-link">View Full Log</a>
                            </div>
                        </div>
                    </section>
                })
            }   
            </article>
        </>
    )
}

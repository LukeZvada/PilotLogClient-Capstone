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
            <div className="flightlog_title">LOGGED FLIGHTS</div>
            <article className="flightlog-card">
            {
                userFlights.map(flight => {
                    return <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{flight.to} &rarr; {flight.fromAirport}</h5>
                            <h6 className="card-subtitle mb-2 text-muted log-date">{flight.date}</h6>
                            <div className="divider">________________________________________</div>
                            <p>Total Flight Time: {flight.total_flight_time} hours</p>
                            <p>Total Landings: {flight.landingsDay}</p>
                            <p>Make And Model: {flight.make_and_model}</p>
                            <p>Aircraft Id: {flight.aircraftId}</p>
                            <Button className="flightsDetailsButton" 
                                    onClick={() => {
                                            props.history.push(`/flightdetails/${flight.id}`)
                                    }}>View Full Log
                            </Button>
                        </div>
                    </div>
                })
            }   
            </article>
        </>
    )
}

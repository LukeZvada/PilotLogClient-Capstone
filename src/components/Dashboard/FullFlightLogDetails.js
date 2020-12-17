import React, { useContext, useEffect, useState } from "react"
import { FlightLogContext } from "./FlightLogProvider"
import "./FlightLogDashboard.css"


export const FullFlightDetails = (props) => {
    const { singleFlight, getSingleFlight } = useContext(FlightLogContext)

    const currentFlightId = props.match.params.flightId

    useEffect(() => {
        getSingleFlight(currentFlightId)
    }, [])

    return (
        <>
            <article>
                <div className="flightlog_title">Flight Details</div>
            </article>
            <article className="flightlog-card">

                    return <section key={singleFlight.id}>
                        <div className="details_card" style={{width: "20rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">To: {singleFlight.to} - From: {singleFlight.fromAirport}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Date: {singleFlight.date}</h6>
                                <p>Make and Model: {singleFlight.make_and_model}</p>
                                <p>Aircraft Id: {singleFlight.aircraftId}</p>
                                <p>From: {singleFlight.fromAirport}</p>
                                <p>To: {singleFlight.to}</p>
                                <p>Landings Day: {singleFlight.landingsDay}</p>
                                <p>Landings Night: {singleFlight.landingsNight}</p>
                                <p>Number of Instrument Approaches: {singleFlight.number_of_instrument_approaches}</p>
                                <p>Type and Location: {singleFlight.type_and_location}</p>
                                <p>Airplane Single or Multi: {singleFlight.airplane_single_multi}</p>
                                <p>Airplane Single or Multi Hours: {singleFlight.airplane_single_multi_hours}</p>
                                <p>Instrument Actual: {singleFlight.instrumentActual}</p>
                                <p>Simulator / Hood: {singleFlight.simulator_hood}</p>
                                <p>FTD / Simulator: {singleFlight.ftd_or_simulator}</p>
                                <p>Night Hours: {singleFlight.night}</p>
                                <p>Cross Country All: {singleFlight.cross_country_all}</p>
                                <p>Cross Country Over 50nm: {singleFlight.cross_country_fivezero}</p>
                                <p>Pilot In Command: {singleFlight.pilot_in_command}</p>
                                <p>Solo: {singleFlight.solo}</p>
                                <p>Ground Training: {singleFlight.ground_training}</p>
                                <p>Flight Training Received: {singleFlight.flight_training_received}</p>
                                <p>Flight Training Given: {singleFlight.flight_training_given}</p>
                                <p>Total Flight Time: {singleFlight.total_flight_time}</p>
                            </div>
                        </div>
                    </section>
            </article>
        </>
    )
}
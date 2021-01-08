import React, { useContext, useEffect, useState } from "react"
import { FlightLogContext } from "./FlightLogProvider"
import "./FlightLogDashboard.css"
import Button from '@material-ui/core/Button';



export const FullFlightDetails = (props) => {
    const { singleFlight, getSingleFlight, deleteFlight } = useContext(FlightLogContext)

    const currentFlightId = props.match.params.flightId

    useEffect(() => {
        getSingleFlight(currentFlightId)
    }, [])

    // const delete_prompt = (id) => {
    //     var retVal = window.confirm("Are you sure you want to delete your comment?");
    //         if( retVal == true ) {
    //             deleteFlight(id)
    //             return true;
    //         } else {
    //             return false;
    //         }
    // }


    return (
        <>
            <article>
                <div className="flightlog_title">Flight Details</div>
            </article>
            <article className="flightDetails-card">

                    <section key={singleFlight.id}>
                        <div className="details_card" style={{width: "100rem"}}>
                            <div className="card-body">
                                <div className="column">
                                    <h5 className="card-title">{singleFlight.to} &rarr; {singleFlight.fromAirport}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Date: {singleFlight.date}</h6>
                                    <p>Make and Model: {singleFlight.make_and_model}</p>
                                    <p>Aircraft Id: {singleFlight.aircraftId}</p>
                                    <p>From: {singleFlight.fromAirport}</p>
                                    <p>To: {singleFlight.to}</p>

                                    <div className="form-section-heading">
                                        <p className="section-heading">Landings</p>
                                    </div>
                                    <p>Day: {singleFlight.landingsDay}</p>
                                    <p>Night: {singleFlight.landingsNight}</p>

                                    <div className="form-section-heading">
                                        <p className="section-heading">Instrument Approaches</p>
                                    </div>
                                    <p>Number: {singleFlight.number_of_instrument_approaches}</p>
                                    <p>Type and Location: {singleFlight.type_and_location }</p>
                                    
                                    <div className="form-section-heading">
                                        <p className="section-heading">Aircraft Category</p>
                                    </div>
                                    {
                                    <p>Type: {singleFlight.airplane_single_multi ? 'Single' : 'Multi'}</p>
                                    }
                                    <p>Type Hours: {singleFlight.airplane_single_multi_hours}</p>
                                </div>

                                <div className="column">
                                    <div className="form-section-heading">
                                        <p className="section-heading">Instrument</p>
                                    </div>
                                    <p>Instrument Actual: {singleFlight.instrumentActual}</p>
                                    <p>Simulator / Hood: {singleFlight.simulator_hood}</p>
                                    <p>FTD or Simulator: {singleFlight.ftd_or_simulator}</p>
                                    <p>Night Hours: {singleFlight.night}</p>

                                    <div className="form-section-heading">
                                        <p className="section-heading">Cross Country</p>
                                    </div>
                                    <p>All: {singleFlight.cross_country_all}</p>
                                    <p>Over 50nm: {singleFlight.cross_country_fivezero}</p>

                                    <div className="form-section-heading">
                                        <p className="section-heading">Hours</p>
                                    </div>
                                    <p>Pilot in Command: {singleFlight.pilot_in_command}</p>
                                    <p>Solo: {singleFlight.solo}</p>
                                    <p>Ground Training: {singleFlight.ground_training}</p>
                                    <p>Flight Training Received: {singleFlight.flight_training_received}</p>
                                    <p>Flight Training Given: {singleFlight.flight_training_given}</p>
                                    <p>Total Flight Time: {singleFlight.total_flight_time}</p>
                                    <p>Remarks: {singleFlight.remarks}</p>
                                </div>
                            </div>
                            <div className="buttonColumn">
                                <Button className="edit_flight_button" 
                                    onClick={() => {
                                        props.history.push(`/newlog/edit/${singleFlight.id}`)
                                    }}>
                                    Edit Flight
                                </Button>
                                <Button className="delete_flight_button" variant="contained"
                                    onClick={
                                        () => deleteFlight(singleFlight.id)
                                        .then(props.history.push('/dashboard'))
                                    }>
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </section>
            </article>
        </>
    )
}
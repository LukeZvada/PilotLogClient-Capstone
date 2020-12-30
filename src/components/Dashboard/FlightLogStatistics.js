import React, { useContext, useEffect, useReducer } from "react"
import { FlightLogContext } from "./FlightLogProvider"
import FlightLandIcon from '@material-ui/icons/FlightLand';
import CloudIcon from '@material-ui/icons/Cloud';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import "./FlightLogDashboard.css"


export const FlightLogStatistics = (props) => {
    const { flights, getFlights } = useContext(FlightLogContext)

    // const currentUserId = parseInt(localStorage.getItem("tourVana_username"))

    useEffect(() => {
        getFlights()
    }, [])

    // calculation for total landingsDay
    let totalLandingsDay = 0
    flights.forEach(flight => totalLandingsDay += flight.landingsDay)

    // calculation for total landingsNight
    let totalLandingsNight = 0
    flights.forEach(flight => totalLandingsNight += flight.landingsNight)

    // calculation for total Number of Instrument Approaches
    let totalInstrumentApproaches = 0
    flights.forEach(flight => totalInstrumentApproaches =+ flight.number_of_instrument_approaches)

    return (
        <>
            <article>
                <div className="flightstatistics_title">FLIGHT STATISTICS</div>
            </article>
            <section className="statistics-card">
                {/* <div class="card-title">Primary card title</div> */}
                <div className="statistics-card-body">
                        <div className="card-body">
                            <p className="statistic-text"><FlightLandIcon fontSize="large"/> {totalLandingsDay}
                            </p>
                        </div>
                </div>
                {/* <div className="card-title">Primary card title</div> */}
                <div className="statistics-card-body">
                        <div className="card-body">
                            <p className="statistic-text"><FlightLandIcon fontSize="large"/>{totalLandingsNight}</p>
                        </div>
                </div>
                {/* <div className="card-title">Primary card title</div> */}
                <div className="statistics-card-body">
                        <div className="card-body">
                            <p className="statistic-text"><CloudIcon fontSize="large" />{totalInstrumentApproaches}</p>
                        </div>
                </div>
                {/* <div className="card-title">Primary card title</div> */}
                <div className="statistics-card-body">
                        <div className="card-body">
                            <p className="statistic-text"><QueryBuilderIcon fontSize="large" />123.4</p>
                        </div>
                </div>
                {/* <div className="card-title">Primary card title</div> */}
                <div className="statistics-card-body">
                        <div className="card-body">
                            <p className="statistic-text"><QueryBuilderIcon fontSize="large" />100.4</p>
                        </div>
                </div>
            </section>
        </>
    )
}
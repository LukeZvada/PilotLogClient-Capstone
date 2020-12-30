import React, { useContext, useEffect, useState } from "react"
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

    return (
        <>
            <article>
                <div className="flightstatistics_title">FLIGHT STATISTICS</div>
            </article>
            <section className="statistics-card">
                {/* <div class="card-title">Primary card title</div> */}
                <div className="statistics-card-body">
                        <div className="card-body">
                            <p className="statistic-text"><FlightLandIcon fontSize="large"/>56</p>
                        </div>
                </div>
                {/* <div className="card-title">Primary card title</div> */}
                <div className="statistics-card-body">
                        <div className="card-body">
                            <p className="statistic-text"><FlightLandIcon fontSize="large"/>42</p>
                        </div>
                </div>
                {/* <div className="card-title">Primary card title</div> */}
                <div className="statistics-card-body">
                        <div className="card-body">
                            <p className="statistic-text"><CloudIcon fontSize="large" />15</p>
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
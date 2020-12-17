import React, { useContext, useEffect, useState } from "react"
import { FlightLogContext } from "./FlightLogProvider"
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
                            <p className="card-text">123.45</p>
                        </div>
                </div>
                {/* <div className="card-title">Primary card title</div> */}
                <div className="statistics-card-body">
                        <div className="card-body">
                            <p className="card-text">123.45</p>
                        </div>
                </div>
                {/* <div className="card-title">Primary card title</div> */}
                <div className="statistics-card-body">
                        <div className="card-body">
                            <p className="card-text">123.45</p>
                        </div>
                </div>
                {/* <div className="card-title">Primary card title</div> */}
                <div className="statistics-card-body">
                        <div className="card-body">
                            <p className="card-text">123.45</p>
                        </div>
                </div>
                {/* <div className="card-title">Primary card title</div> */}
                <div className="statistics-card-body">
                        <div className="card-body">
                            <p className="card-text">123.45</p>
                        </div>
                </div>
            </section>
        </>
    )
}
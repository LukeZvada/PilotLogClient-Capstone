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
        <section className="statistics-card">
            {/* <div class="card-title">Primary card title</div> */}
            <div class="statistics-card-body">
                    <div class="card-body">
                        <p class="card-text">123.45</p>
                    </div>
            </div>
            {/* <div class="card-title">Primary card title</div> */}
            <div class="statistics-card-body">
                    <div class="card-body">
                        <p class="card-text">123.45</p>
                    </div>
            </div>
            {/* <div class="card-title">Primary card title</div> */}
            <div class="statistics-card-body">
                    <div class="card-body">
                        <p class="card-text">123.45</p>
                    </div>
            </div>
            {/* <div class="card-title">Primary card title</div> */}
            <div class="statistics-card-body">
                    <div class="card-body">
                        <p class="card-text">123.45</p>
                    </div>
            </div>
            {/* <div class="card-title">Primary card title</div> */}
            <div class="statistics-card-body">
                    <div class="card-body">
                        <p class="card-text">123.45</p>
                    </div>
            </div>
        </section>
    )
}
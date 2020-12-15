import React, { useContext, useEffect, useState } from "react"
import { FlightLogContext } from "./FlightLogProvider"
import "./FlightLogDashboard.css"


export const ShowList = (props) => {
    const { flights, getFlights } = useContext(ShowContext)

    // const currentUserId = parseInt(localStorage.getItem("tourVana_username"))

    useEffect(() => {
        getFlights()
    }, [])

    return (
        <>
            <article className="welcomeMessage">
                <section key={currentUser.id} className="user">
                    <div><h1 className="welcomeTitle">Welcome, {currentUser.firstName}</h1></div>
                </section>
            </article>
            
            <article>
                <div><h2 className="upcomingShows">Upcoming Shows</h2></div>
            </article>
        </>
    )
}


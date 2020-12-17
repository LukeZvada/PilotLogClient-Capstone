import React, { useContext, useEffect, useState } from "react"
import { FlightLogUserContext } from "./UserProfileProvider"
import "./FlightLogDashboard.css"


export const FlightLogHeader = (props) => {
    const { currentUser, getCurrentUser } = useContext(FlightLogUserContext)
    const currentUserId = parseInt(localStorage.getItem("pilotLogUser_Id"))

    useEffect(() => {
        getCurrentUser()
    }, [])

    return (
        <>
            <article>
                <div><h2 className="dashboard_Title">Dashboard</h2></div>
            </article>
            <article>
                <div className="dashboard_Quote">“The engine is the heart of an airplane, but the pilot is its soul."</div>
            </article>
            <article>
                <div><h2 className="dashboard_Profile">{currentUser.first_name}</h2></div>
            </article>
        </>
    )
}
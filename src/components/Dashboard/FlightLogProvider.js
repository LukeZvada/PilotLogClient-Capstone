import React, { useState } from "react"

export const FlightLogContext = React.createContext()

export const FlightLogProvider = (props) => {
    const [flights, setFlights] = useState([])
    const [singleFlight, setSingleFlight] = useState([])
    const [userFlights, setUserFlights] = useState([{pilotlog_user: {user: {}}}])


    const getFlights = () => {
        return fetch(`http://localhost:8000/newlog`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("pilotLogUser_id")}`
            }})
            .then(res => res.json())
            .then(setFlights)
    }
    
    const getSingleFlight = (flight) => {
        return fetch(`http://localhost:8000/newlog/${flight}`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("pilotLogUser_id")}`
            }})
            .then(res => res.json())
            .then(setSingleFlight)
    }

    const getUserFlights = (user) => {
        return fetch(`http://localhost:8000/newlog`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("pilotLogUser_id")}`
            }})
            .then(res => res.json())
            .then(setUserFlights)
    }

    const addFlight = flight => {
        return fetch("http://localhost:8000/newlog", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("pilotLogUser_id")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(flight)
        })
            .then(getFlights)
    }

    const editFlight = flight => {
        return fetch(`http://localhost:8000/newlog/${flight.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("pilotLogUser_id")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(flight)
        })
            .then(getFlights)
    }

    const deleteFlight = (flightId) => {
        return fetch(`http://localhost:8000/newlog/${flightId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("pilotLogUser_id")}`,
            },
        })
            // .then(() => {
            //     getUserFlights(localStorage.getItem("pilotLogUser_Id"))
            // })
    }

    return (
        <FlightLogContext.Provider value={{
            flights, getFlights, getUserFlights, userFlights, addFlight, editFlight,
            deleteFlight, getSingleFlight, singleFlight
        }}>
            {props.children}
        </FlightLogContext.Provider>
    )
}
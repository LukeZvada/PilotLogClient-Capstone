import React, { useState } from "react"

export const FlightLogContext = React.createContext()

export const FlightLogProvider = (props) => {
    const [flights, setFlights] = useState([])
    const [userFlights, setUserFlights] = useState([{pilotlog_user: {user: {}}}])


    const getFlights = () => {
        return fetch("http://localhost:8000/newlog")

            .then(res => res.json())
            .then(setFlights)
    }

    const getUserFlights = (user) => {
        return fetch(`http://localhost:8000/newlog`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("pilotLogUser_id")}`
            }})
            .then(res => res.json())
            .then(setUserFlights)
    }


    return (
        <FlightLogContext.Provider value={{
            flights, getFlights, getUserFlights, userFlights
        }}>
            {props.children}
        </FlightLogContext.Provider>
    )
}
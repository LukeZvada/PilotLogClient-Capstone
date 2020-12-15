import React, { useState } from "react"

export const FlightLogContext = React.createContext()

export const FlightLogProvider = (props) => {
    const [flights, setFlights] = useState([])
    const [userFlights, setUserFlights] = useState([])


    const getFlights = () => {
        return fetch("http://localhost:8088/newlog")
            .then(res => res.json())
            .then(setFlights)
    }

    const getUserFlights = (userId) => {
        return fetch(`http://localhost:8088/newlog?userId=${userId}`)
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
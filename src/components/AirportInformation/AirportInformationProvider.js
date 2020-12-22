import React, { useState } from "react"

export const AirportInfoContext = React.createContext()

export const AirportInfoProvider = (props) => {
    const [airportInfo, setAirportInfo] = useState([])


    const getAirportInfo = (airportInfo) => {
        return fetch(`https://avwx.rest/api/station/${airportInfo}?format=json`, {
            headers:{
                "Authorization": `Token vcekIIw9huf9JvlRczTssGjFyvYvo5hKlgJFAKHrexI`
            }})
            .then(res => res.json())
            .then(setAirportInfo)
    }

    return (
        <AirportInfoContext.Provider value={{
            airportInfo, getAirportInfo
        }}>
            {props.children}
        </AirportInfoContext.Provider>
    )
}
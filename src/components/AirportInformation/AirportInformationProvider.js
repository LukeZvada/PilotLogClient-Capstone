import React, { useState } from "react"

export const MetarContext = React.createContext()

export const MetarProvider = (props) => {
    const [airportInfo, setAirportInfo] = useState([])


    const getAirportInfo = (airportInfo) => {
        return fetch(`https://avwx.rest/api/station/${airportInfo}?format=json`, {
            headers:{
                "Authorization": `Token vcekIIw9huf9JvlRczTssGjFyvYvo5hKlgJFAKHrexI`
            }})
            .then(res => res.json())
            .then(setAirportInfo)
    }
}
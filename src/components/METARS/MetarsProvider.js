import React, { useState } from "react"

export const MetarContext = React.createContext()

export const MetarProvider = (props) => {
    const [metars, setMetars] = useState([])


    const getMetars = () => {
        return fetch(`https://avwx.rest/api/metar/KCLE`, {
            headers:{
                "Authorization": `Token vcekIIw9huf9JvlRczTssGjFyvYvo5hKlgJFAKHrexI`
            }})
            .then(res => res.json())
            .then(setMetars)
    }

    return (
        <MetarContext.Provider value={{
            metars, getMetars
        }}>
            {props.children}
        </MetarContext.Provider>
    )
}
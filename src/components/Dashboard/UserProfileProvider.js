import React, { useState } from "react"

export const FlightLogUserContext = React.createContext()

export const FlightLogUserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState([])


    const getCurrentUser = () => {
        const currentUserId = localStorage.getItem("pilotLogUser_number")
        console.log(currentUser)
        const id = parseInt(currentUserId)
        return fetch(`http://localhost:8000/pilotlogprofile/${id}`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("pilotLogUser_id")}`
            }})
            .then(res => res.json())
            .then(setCurrentUser)
        }
        
        
        return (
            <FlightLogUserContext.Provider value={{
                currentUser, getCurrentUser
            }}>
            {props.children}
        </FlightLogUserContext.Provider>
    )
}

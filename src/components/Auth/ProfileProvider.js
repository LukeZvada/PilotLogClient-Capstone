import React, { useState } from "react"

export const ProfileContext = React.createContext()

export const ProfileProvider = (props) => {
    const [pilotLogSingleProfile, setSinglePilotLogProfile] = useState({"user": {}})

    const getSinglePilotLogProfile = (profile) => {
        return fetch(`http://localhost:8000/pilotlogprofile/${profile}`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("pilotLogUser_id")}`
            }})
            .then(res => res.json())
            .then(setSinglePilotLogProfile)

        }
    return (
        <ProfileContext.Provider value={{
            getSinglePilotLogProfile, pilotLogSingleProfile
        }}>
            {props.children}
        </ProfileContext.Provider>
    )
}
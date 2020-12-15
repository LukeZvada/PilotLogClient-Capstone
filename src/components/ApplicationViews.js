import React from "react"
import { Route } from "react-router-dom"


export const ApplicationViews = () => {
    return <>

        <Route path="/logout" render={
            (props) => {
                localStorage.removeItem("pilotLogUser_id")
                props.history.push("/login")
            }
        } />
    </>
}
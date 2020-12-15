import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./Nav/NavBar"
import { Login } from "./Auth/Login"
import { Register } from "./Auth/Register"
import { ProfileProvider } from "./Auth/ProfileProvider"


export const PilotLog = (props) => (
    <>
        <Route render={(props) => {
            if (localStorage.getItem("pilotLogUser_id")) {
                return <>
                    <NavBar />
                    <ApplicationViews />
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />
        <ProfileProvider>

            <Route path="/login" render={() => {
                if (localStorage.getItem("pilotLogUser_id")) {
                    return <Redirect to="/" />
                } else {
                    return <Login />
                }
            }} />
            <Route path="/register" render={props => <Register {...props} />} />
        </ProfileProvider>

    </>
)
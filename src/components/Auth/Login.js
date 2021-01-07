import React, { useContext, useEffect, useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import {ProfileContext} from "./ProfileProvider"
import Button from '@material-ui/core/Button';
import "./Auth.css"


export const Login = () => {
    const { getSinglePilotLogProfile, pilotLogSingleProfile } = useContext(ProfileContext)
    const email = useRef()
    const password = useRef()
    const invalidDialog = useRef()
    const history = useHistory()
    let userNumber = localStorage.getItem("pilotlogUser_number")


    const handleLogin = (e) => {
        e.preventDefault()

        return fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: email.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if (res.valid) {
                    localStorage.setItem("pilotLogUser_id", res.token )
                    localStorage.setItem("pilotLogUser_number", res.user_no)
                    history.push("/dashboard")
                    
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Email or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section className="form-background">
                <form className="form--login" onSubmit={handleLogin}>
                    <fieldset className="email-fieldset">
                        <label htmlFor="inputEmail"> Email </label>
                        <input ref={email} type="email" id="email" className="login-input" defaultValue="me@me.com" placeholder="Email address" required autoFocus />
                    </fieldset>
                    <fieldset className="email-fieldset">
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password" id="password" className="login-input" defaultValue="me" placeholder="Password" required />
                    </fieldset>
                    <fieldset className="button-fieldset">
                        <Button className="login-button" type="submit">Login</Button>
                    </fieldset>
                    <div className="register-button">
                        <Link to="/register">New Here? Register</Link>
                    </div>
                </form>
            </section>
            {/* <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section> */}
        </main>
    )
}


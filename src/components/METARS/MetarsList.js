import React, { useContext, useEffect, useState } from "react"
import { MetarContext } from "./MetarsProvider"
import "./Metars.css"
import { Button } from "@material-ui/core"


export const MetarList = (props) => {
    const { metars, getMetars } = useContext(MetarContext)

    useEffect(() => {
        getMetars()
    }, [])

    return (
        <>
        <article className="airport_search">
            <div class="active-cyan-3 active-cyan-4 mb-4">
                <input class="form-control" type="text" placeholder="Search" aria-label="Search"></input>
            </div>
        </article>

        <button className="metar_button">Get Metar Data</button>


        <section className="metar_container">
                    <div className="metars_card" style={{width: "20rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">{metars.sanitized}</h5>
                            <h6 className="card-subtitle mb-2 text-muted"></h6>
                        </div>
                    </div>
        </section>
        </>
    )
}

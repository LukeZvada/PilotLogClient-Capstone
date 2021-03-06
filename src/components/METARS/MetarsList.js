import React, { useContext, useEffect, useState } from "react"
import { MetarContext } from "./MetarsProvider"
import "./Metars.css"
import { Button } from "@material-ui/core"


export const MetarList = (props) => {
    const {metars, getMetars} = useContext(MetarContext)
    const [airport, setAirport] = useState('')
    const [query, setQuery] = useState('')
    const [formatType, setFormatType] = useState('')

    const handleControlledInputChange = (event) => {
        setFormatType(event.target.value)
    }

    return (
        <>
            <article className="airport_search">
                <div class="active-cyan-3 active-cyan-4 mb-4">
                    <div className="search_title">Search ICAO: </div>
                    <input onChange={event => setAirport(event.target.value)} class="form-control" type="text" placeholder="e.g. KBNA" aria-label="Search"></input>
                </div>
                <fieldset>
                    <div className="form-group-metars radio">
                        <div>Format: </div>
                        <div >
                            <input className = "metar_radio_1" type="radio" value="info" name="formatType" 
                                onChange={handleControlledInputChange}/> Raw
                            <input className = "metar_radio_2" type="radio" value="speech" name="formatType"
                                onChange={handleControlledInputChange} /> Decode
                        </div>
                    </div>
                </fieldset>
            </article>



            <button className="metar_button" 
                    onClick={() => 
                        getMetars(airport, formatType).then(setQuery(airport)) 
                        // Saving in the setQuery so when the user types in new ICAO code the previous value is saved. Holding the airport so I can query the dynamic keyname that is returned. 
                    }>Get Metar Data</button>

            {
                // on page load metars will have no value so checking here to see if it has a value before it renders this section
                metars.hasOwnProperty(query) ?
                <section className="metar_container">
                    <div className="metars_card" style={{width: "20rem"}}>
                        <div className="card-body">
                            <h2 className="metar-title">Meteorological Terminal Air Report</h2>
                            <div className="card-title-metarInfo">{
                                formatType == "speech" ? metars[query].speech : metars[query].raw}</div>
                        </div>
                    </div>
                </section>
                : null
            }
        </>
    )
}

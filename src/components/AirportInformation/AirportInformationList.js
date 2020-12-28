import React, { useContext, useEffect, useState } from "react"
import { AirportInfoContext } from "./AirportInformationProvider"
import "./AirportInformation.css"
import "../../index.css"
import { Button } from "@material-ui/core"


export const AirportInfoList = (props) => {
    const {airportInfo, getAirportInfo} = useContext(AirportInfoContext)
    const [airport, setAirport] = useState('')



    return (
        <>
            <article className="airport_search">
                <div class="active-cyan-3 active-cyan-4 mb-4">
                    <div className="search_title">Search ICAO: </div>
                    <input onChange={event => setAirport(event.target.value)} class="form-control" type="text" placeholder="ex: KBNA" aria-label="Search"></input>
                </div>
            </article>

            <button className="metar_button" 
                    onClick={() => 
                        getAirportInfo(airport) 
                    }>Get Airport Information</button>
            {
                Object.keys(airportInfo).length != 0  ?
                    <section className="airportInfo_container">
                        <div className="airport_card" style={{width: "20rem"}}>
                            <div className="airportcard-body">
                                    <h1 className="card-title">{
                                        airportInfo.name}</h1>
                                    <div className="airport_location">
                                        <span>Location:</span> 
                                        <span>{airportInfo.city}, {airportInfo.state}</span>
                                    </div> 
                                    <div className="airport_icao">
                                        <span>ICAO:</span> 
                                        <span>{airportInfo.icao}</span>
                                    </div> 
                                    <div className="airport_elevation">
                                        <span>Elevation:</span> 
                                        <span>{airportInfo.elevation_ft}ft</span>
                                    </div> 
                                    <div className="airport_type">
                                        <span>Airport Type:</span> 
                                        <span>{airportInfo.type}</span>
                                    </div> 
                                    <div className="airport_moreInfo">
                                        <span>More Info:</span> 
                                        <span>{airportInfo.wiki}</span>
                                    </div>
                            </div>
                        </div>
                    </section>
                : null
            }
        </>
    )
}

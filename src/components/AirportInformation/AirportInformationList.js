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
                    <input onChange={event => setAirport(event.target.value)} class="form-control" type="text" placeholder="Search ICAO" aria-label="Search"></input>
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
                                    <div className="airport_location">Location: {airportInfo.city}, {airportInfo.state}</div> 
                                    <div className="airport_icao">ICAO: {airportInfo.icao}</div> 
                                    <div className="airport_elevation">Elevation: {airportInfo.elevation_ft}ft</div> 
                                    <div className="airport_type">Airport Type: {airportInfo.type}ft</div> 
                                    <div className="airport_moreInfo">More Info: {airportInfo.wiki}</div>
                            </div>
                        </div>
                    </section>
                : null
            }
        </>
    )
}

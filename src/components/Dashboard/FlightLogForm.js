import React, { useContext, useEffect, useState } from "react"
import { FlightLogContext } from "./FlightLogProvider"
import "./FlightLogDashboard.css"
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'



export const FlightForm = (props) => {
    const { addFlight, getFlights, flights, editFlight } = useContext(FlightLogContext)
    const [flight, setFlight] = useState({})
    const [show, setShow] = useState(false)
    const [currentInBetween, setCurrentInBetween] = useState({})
    const [inBetweens, setInBetweens] = useState([])

    const editMode = props.match.params.hasOwnProperty("flightId")

    const handleControlledInputChange = (event) => {
        const newFlight = Object.assign({}, flight)
        newFlight[event.target.name] = event.target.value
        setFlight(newFlight)
    }

    const handleModalInputChange = (event) => {
        //This is handling the keydown change to the input in the modal
        const newInBetween = event.target.value
        //This is setting the currentInBetween state with the current value of the input field in the modal 
        setCurrentInBetween(newInBetween)
    }

    const handleSaveInBetween = () => {
        //when save is clicked, this updates the inBetween state to add the most recently entered value of the modal. 
        setInBetweens(inBetweens.concat(currentInBetween))
        //closes modal
        handleClose()
    }

    const getFlightInEditMode = () => {
        if (editMode) {
            const flightId = parseInt(props.match.params.flightId)
            const selectedFlight = flights.find(f => f.id === flightId) || {}
            setFlight(selectedFlight)
        }
    }

        
    useEffect(() => {
        getFlights()
    }, [])

    useEffect(() => {
        //Once latest inBetweens state is saved, I used the updated state to update the state of the flight 
        //current state of flight
        const newFlight = Object.assign({}, flight)
        //updating flight with new list of inbewteens 
        newFlight["in_betweens"] = inBetweens
        //updating the state entire flight
        setFlight(newFlight)
    }, [inBetweens]) //watching for state change depened

    useEffect(() => {
        getFlightInEditMode()
    }, [flights])

    const constructNewFlight = () => {

            if (editMode) {
                editFlight({
                    id: flight.id,
                    date: flight.date,
                    make_and_model: flight.make_and_model,
                    aircraftId: flight.aircraftId,
                    fromAirport: flight.fromAirport,
                    to: flight.to,
                    landingsDay: parseInt(flight.landingsDay),
                    landingsNight: parseInt(flight.landingsNight),
                    number_of_instrument_approaches: parseInt(flight.number_of_instrument_approaches),
                    type_and_location: flight.type_and_location,
                    airplane_single_multi: flight.airplane_single_multi,
                    airplane_single_multi_hours: parseInt(flight.airplane_single_multi_hours),
                    instrumentActual: parseInt(flight.instrumentActual),
                    simulator_hood: parseInt(flight.simulator_hood),
                    ftd_or_simulator: parseInt(flight.ftd_or_simulator),
                    night: parseInt(flight.night),
                    cross_country_all: parseInt(flight.cross_country_all),
                    cross_country_fivezero: parseInt(flight.cross_country_fivezero),
                    pilot_in_command: parseInt(flight.pilot_in_command),
                    solo: parseInt(flight.solo),
                    ground_training: parseInt(flight.ground_training),
                    flight_training_received: parseInt(flight.flight_training_received),
                    flight_training_given: parseInt(flight.flight_training_given),
                    total_flight_time: parseInt(flight.total_flight_time),
                    remarks: flight.remarks,
                    in_betweens: flight.in_betweens
                })
                    .then(() => props.history.push("/dashboard"))
            } else {
                addFlight({
                    id: flight.id,
                    date: flight.date,
                    make_and_model: flight.make_and_model,
                    aircraftId: flight.aircraftId,
                    fromAirport: flight.fromAirport,
                    to: flight.to,
                    landingsDay: parseInt(flight.landingsDay),
                    landingsNight: parseInt(flight.landingsNight),
                    number_of_instrument_approaches: parseInt(flight.number_of_instrument_approaches),
                    type_and_location: flight.type_and_location,
                    airplane_single_multi: flight.airplane_single_multi,
                    airplane_single_multi_hours: parseInt(flight.airplane_single_multi_hours),
                    instrumentActual: parseInt(flight.instrumentActual),
                    simulator_hood: parseInt(flight.simulator_hood),
                    ftd_or_simulator: parseInt(flight.ftd_or_simulator),
                    night: parseInt(flight.night),
                    cross_country_all: parseInt(flight.cross_country_all),
                    cross_country_fivezero: parseInt(flight.cross_country_fivezero),
                    pilot_in_command: parseInt(flight.pilot_in_command),
                    solo: parseInt(flight.solo),
                    ground_training: parseInt(flight.ground_training),
                    flight_training_received: parseInt(flight.flight_training_received),
                    flight_training_given: parseInt(flight.flight_training_given),
                    total_flight_time: parseInt(flight.total_flight_time),
                    remarks: flight.remarks,
                    in_betweens: flight.in_betweens
                })
                    .then(() => props.history.push("/dashboard"))
            }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <form className="new_flight_form">
            <article className="form_title">
                <h2>LOG A FLIGHT</h2>
            </article>
            <fieldset>
                <div className="form-group">
                    <label className="form-label" htmlFor="date">Date:</label>
                    <input type="date" name="date" required autoFocus className="form-control"
                        placeholder="Date"
                        defaultValue={flight.date}
                        onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label" htmlFor="make_and_model">Make and Model:</label>
                    <input type="text" name="make_and_model" required className="form-control"
                        placeholder="Cessna 172"
                        defaultValue={flight.make_and_model}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label" htmlFor="aircraftId">Aircraft Id:</label>
                    <input type="text" name="aircraftId" required className="form-control"
                        placeholder="N189k"
                        defaultValue={flight.aircraftId}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label" htmlFor="fromAirport">From:</label>
                    <input type="text" name="fromAirport" required className="form-control"
                        placeholder="e.g. KBNA"
                        defaultValue={flight.fromAirport}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <section key={flight.id}>
                {
                    inBetweens.length >= 1 ? 
                        <div className="form-group">
                            <label className="form-label inbetween" htmlFor="in_betweens">InBetween: </label>
                            <div>
                                {
                                    inBetweens.map(airport => {
                                        return <section key={airport}>
                                            <div className="in-between-airport">{airport}</div>
                                        </section>
                                    })
                                }
                            </div>
                        </div>
                    : null
                }
                <Button className="between_button" variant="secondary" onClick={handleShow}>
                    Add InBetween Stop
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                    <Modal.Title>Add InBewteen Stop</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><input id="inBetweenInput" type="text" name="inbetween" required className="form-control"
                        placeholder="InBetween Stop"
                        onChange={handleModalInputChange}
                    /></Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="contained" onClick={handleSaveInBetween}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </section>
            <fieldset>
                <div className="form-group">
                    <label className="form-label" htmlFor="to">To:</label>
                    <input type="text" name="to" required className="form-control"
                        placeholder="e.g. KCLE"
                        defaultValue={flight.to}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label" htmlFor="landingsDay">Landings (day):</label>
                    <input type="number" name="landingsDay" required className="form-control"
                        placeholder="Number of landings during the day"
                        defaultValue={flight.landingsDay}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label" htmlFor="landingsNight">Landings (Night): </label>
                    <input type="number" name="landingsNight" required className="form-control"
                        placeholder="Number of landings at night"
                        defaultValue={flight.landingsNight}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label" htmlFor="number_of_instrument_approaches">Number of Instrument Approaches:</label>
                    <input type="number" name="number_of_instrument_approaches" required className="form-control"
                        placeholder="Number Of Instrument Approaches"
                        defaultValue={flight.number_of_instrument_approaches}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label" htmlFor="type_and_location">Type and Location:</label>
                    <input type="text" name="type_and_location" required className="form-control"
                        placeholder="Instrument Approach Type and Location"
                        defaultValue={flight.type_and_location}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group radio">
                    <label className="form-label" htmlFor="airplane_single_multi">Aircraft Type:</label>
                <div>
                    <input className="radio-1" type="radio" value="True" name="airplane_single_multi" 
                        defaultValue={flight.airplane_single_multi}
                        onChange={handleControlledInputChange}/> Single
                    <input className="radio-2" type="radio" value="False" name="airplane_single_multi"
                        defaultValue={flight.airplane_single_multi}
                        onChange={handleControlledInputChange} /> Multi
                </div>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label" htmlFor="airplane_single_multi_hours">Aircraft Type Hours:</label>
                    <input type="number" name="airplane_single_multi_hours" required className="form-control"
                        placeholder="Aircraft Type Hours"
                        defaultValue={flight.airplane_single_multi_hours}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label" htmlFor="instrumentActual">Instrument Actual:</label>
                    <input type="number" name="instrumentActual" required className="form-control"
                        placeholder="Instrument Actual Hours"
                        defaultValue={flight.instrumentActual}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label" htmlFor="simulator_hood">Simulator / Hood:</label>
                    <input type="number" name="simulator_hood" required className="form-control"
                        placeholder="Simulator / Hood Hours"
                        defaultValue={flight.simulator_hood}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label" htmlFor="ftd_or_simulator">FTD or Simulator:</label>
                    <input type="number" name="ftd_or_simulator" required className="form-control"
                        placeholder="FTD or Simulator Hours"
                        defaultValue={flight.ftd_or_simulator}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label" htmlFor="night">Night Hours:</label>
                    <input type="number" name="night" required className="form-control"
                        placeholder="Night Hours"
                        defaultValue={flight.night}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label" htmlFor="cross_country_all">Cross Country (All):</label>
                    <input type="number" name="cross_country_all" required className="form-control"
                        placeholder="Cross Country All Hours"
                        defaultValue={flight.cross_country_all}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label" htmlFor="cross_country_fivezero">Cross Country Over 50nm:</label>
                    <input type="number" name="cross_country_fivezero" required className="form-control"
                        placeholder="Cross Country Over 50nm Hours"
                        defaultValue={flight.cross_country_fivezero}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label" htmlFor="pilot_in_command">Pilot In Command:</label>
                    <input type="number" name="pilot_in_command" required className="form-control"
                        placeholder="Pilot In Command Hours"
                        defaultValue={flight.pilot_in_command}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label" htmlFor="solo">Solo:</label>
                    <input type="number" name="solo" required className="form-control"
                        placeholder="Solo Hours"
                        defaultValue={flight.solo}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label" htmlFor="ground_training">Ground Training:</label>
                    <input type="number" name="ground_training" required className="form-control"
                        placeholder="Ground Training Hours"
                        defaultValue={flight.ground_training}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label" htmlFor="flight_training_received">Flight Training Received:</label>
                    <input type="number" name="flight_training_received" required className="form-control"
                        placeholder="Flight Training Received Hours"
                        defaultValue={flight.flight_training_received}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label" htmlFor="flight_training_given">Flight Training Given</label>
                    <input type="number" name="flight_training_given" required className="form-control"
                        placeholder="Flight Training Given Hours"
                        defaultValue={flight.flight_training_given}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label" htmlFor="total_flight_time">Total Flight Time: </label>
                    <input type="number" name="total_flight_time" required className="form-control"
                        placeholder="Total Flight Time Hours"
                        defaultValue={flight.total_flight_time}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="form-label" htmlFor="remarks">Remarks: </label>
                    <input type="text" name="remarks" required className="form-control"
                        placeholder="Remarks"
                        defaultValue={flight.remarks}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <section>
                <Button className="saveFlightButton" variant="contained" type="submit"
                    onClick={evt => {
                        evt.preventDefault() 
                        constructNewFlight()
                    }}>
                    Save Flight
                </Button>
                <Button className="cancelFlightButton" variant="contained" onClick={() => props.history.push(`/dashboard`)}>Cancel</Button>
            </section>
        </form>
        </>
    )
}
import React, { useContext, useEffect, useState, useRef } from "react"
import { FlightLogContext } from "./FlightLogProvider"
import "./FlightLogDashboard.css"
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'



export const FlightForm = (props) => {
    const { addFlight, getFlights, flights, editFlight } = useContext(FlightLogContext)
    const [flight, setFlight] = useState({})
    const [show, setShow] = useState(false);

    const editMode = props.match.params.hasOwnProperty("flightId")

    const handleControlledInputChange = (event) => {
        const newFlight = Object.assign({}, flight)
        newFlight[event.target.name] = event.target.value
        setFlight(newFlight)
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
                    total_flight_time: parseInt(flight.total_flight_time)
                    // userId: parseInt(localStorage.getItem("pilotLogUser_Id"))
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
                    total_flight_time: parseInt(flight.total_flight_time)
                    // userId: parseInt(localStorage.getItem("pilotLogUser_Id"))
                })
                    .then(() => props.history.push("/dashboard"))
            }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <form className="new_flight_form">
            <article className="form_title">
                <h2>Log A Flight</h2>
            </article>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date"></label>
                    <input type="date" name="date" required autoFocus className="form-control"
                        placeholder="Date"
                        defaultValue={flight.date}
                        onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="make_and_model"></label>
                    <input type="text" name="make_and_model" required className="form-control"
                        placeholder="Make and Model"
                        defaultValue={flight.make_and_model}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="aircraftId"></label>
                    <input type="text" name="aircraftId" required className="form-control"
                        placeholder="aircraftId"
                        defaultValue={flight.aircraftId}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fromAirport"></label>
                    <input type="text" name="fromAirport" required className="form-control"
                        placeholder="From"
                        defaultValue={flight.fromAirport}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <section>
                <Button className="between_button" variant="secondary" onClick={handleShow}>
                    Add InBetween Stop
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                    <Modal.Title>Add InBewteen Stop</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><input type="text" name="inbetween" required className="form-control"
                        placeholder="InBetween Stop"
                        defaultValue={flight.InBetween}
                        onChange={handleControlledInputChange}
                    /></Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="contained" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </section>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="to"></label>
                    <input type="text" name="to" required className="form-control"
                        placeholder="To"
                        defaultValue={flight.to}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="landingsDay"></label>
                    <input type="number" name="landingsDay" required className="form-control"
                        placeholder="Landings Day"
                        defaultValue={flight.landingsDay}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="landingsNight"></label>
                    <input type="number" name="landingsNight" required className="form-control"
                        placeholder="Landings Night"
                        defaultValue={flight.landingsNight}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="number_of_instrument_approaches"></label>
                    <input type="number" name="number_of_instrument_approaches" required className="form-control"
                        placeholder="Number Of Instrument Approaches"
                        defaultValue={flight.number_of_instrument_approaches}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="type_and_location"></label>
                    <input type="text" name="type_and_location" required className="form-control"
                        placeholder="Type and Location"
                        defaultValue={flight.type_and_location}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group radio">
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
                    <label htmlFor="airplane_single_multi_hours"></label>
                    <input type="number" name="airplane_single_multi_hours" required className="form-control"
                        placeholder="Multi / Single Hours"
                        defaultValue={flight.airplane_single_multi_hours}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="instrumentActual"></label>
                    <input type="number" name="instrumentActual" required className="form-control"
                        placeholder="Instrument Actual"
                        defaultValue={flight.instrumentActual}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="simulator_hood"></label>
                    <input type="number" name="simulator_hood" required className="form-control"
                        placeholder="Simulator / Hood"
                        defaultValue={flight.simulator_hood}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="ftd_or_simulator"></label>
                    <input type="number" name="ftd_or_simulator" required className="form-control"
                        placeholder="FTD or Simulator"
                        defaultValue={flight.ftd_or_simulator}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="night"></label>
                    <input type="number" name="night" required className="form-control"
                        placeholder="Night"
                        defaultValue={flight.night}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="cross_country_all"></label>
                    <input type="number" name="cross_country_all" required className="form-control"
                        placeholder="Cross Country All"
                        defaultValue={flight.cross_country_all}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="cross_country_fivezero"></label>
                    <input type="number" name="cross_country_fivezero" required className="form-control"
                        placeholder="Cross Country Over 50nm"
                        defaultValue={flight.cross_country_fivezero}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="pilot_in_command"></label>
                    <input type="number" name="pilot_in_command" required className="form-control"
                        placeholder="Pilot In Command"
                        defaultValue={flight.pilot_in_command}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="solo"></label>
                    <input type="number" name="solo" required className="form-control"
                        placeholder="Solo"
                        defaultValue={flight.solo}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="ground_training"></label>
                    <input type="number" name="ground_training" required className="form-control"
                        placeholder="Ground Training"
                        defaultValue={flight.ground_training}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="flight_training_received"></label>
                    <input type="number" name="flight_training_received" required className="form-control"
                        placeholder="Flight Training Received"
                        defaultValue={flight.flight_training_received}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="flight_training_given"></label>
                    <input type="number" name="flight_training_given" required className="form-control"
                        placeholder="Flight Training Given"
                        defaultValue={flight.flight_training_given}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="total_flight_time"></label>
                    <input type="number" name="total_flight_time" required className="form-control"
                        placeholder="Total Flight Time"
                        defaultValue={flight.total_flight_time}
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
    )
}
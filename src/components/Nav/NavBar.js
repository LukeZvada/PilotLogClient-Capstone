import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <section className="navbar">
            <div className="navbarTitle">
                <Link className="navbar__titleLink circle" to="/dashboard"><div className="circle"></div><span className="pilotText">Pilot</span> <span className="logText">Log</span></Link>
            </div>
            <div className="navbar__item">
                <Link className="navbar__link" to="/dashboard"><div className ="icon">Dashboard</div></Link>
            </div>
            <div className="navbar__item">
                <Link className="navbar__link" to="/lognewflight"><div className ="icon">Log New Flight</div></Link>
            </div>
            <div className="navbar__item">
                <Link className="navbar__link" to="/metars"><div className ="icon">METARS</div></Link>
            </div>
            <div className="navbar__item">
                <Link className="navbar__link" to="/airportinformation"><div className ="icon">Airport Information</div></Link>
            </div>
            <div className="navbar__item">
                <Link className="navbar__link" to="/logout"><div className ="icon">Logout</div></Link>
            </div>
            
        </section>
    )
}

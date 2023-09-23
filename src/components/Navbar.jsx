import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <h1>48 Planets</h1>
                </div>

                <div className="menu-icon" onClick={handleShowNavbar}>
                    🌹
                </div>


                <div className={`nav-elements ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Test</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Info</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar
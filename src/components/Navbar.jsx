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
                    <a href="/">48 Planets ♋︎</a>
                </div>

                <div className="menu" onClick={handleShowNavbar}>
                    <div className="menu-icon"></div>
                    <div className="menu-icon"></div>
                    <div className="menu-icon"></div>
                </div>


                <div className={`nav-elements ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink to="/App.jsx">Home</NavLink>
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
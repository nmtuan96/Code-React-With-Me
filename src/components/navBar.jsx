import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/students">Students</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/teachers">Teacher/Parent</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/classes">Class</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;
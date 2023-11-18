import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav id="navbar">
            <div id="logo">
                <Link to="">
                    <img src="assets/logo 1.png" alt="Logo" />
                </Link>
            </div>
            <ul className="nav-links-container">
                <li className="navlinks">
                    <Link to="/locate">
                        <img src="assets/locate.png" alt="" />
                    </Link>
                </li>
                <li className="navlinks">
                    <Link to="/credit">
                        <img src="assets/coins.png" alt="" />
                    </Link>
                </li>
                <li className="navlinks">
                    <Link to="/login">LogIn</Link>
                </li>
                <li className="navLinks">
                    <img src="assets/search.png" alt="" />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;

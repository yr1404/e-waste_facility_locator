import React, { useState } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        console.log("clicked");
    };


    return (
        <nav id="navbar">
            <div id="logo">
                <Link to="" id='logo-link'>
                    <img src="assets/logo 1.png" alt="Logo" />
                    <span>eWaste Facility Locator</span>
                </Link>
            </div>
            <ul className="nav-links-container">
                <li className="navlinks">
                    <Link to="/locate">
                        <img src="assets/locate.png" alt="" id='locate' />
                    </Link>
                </li>
                <li className="navlinks">
                    <Link to="/credit">
                        <img src="assets/coins.png" alt="Credit Points" id='credit-points'/>
                    </Link>
                </li>
                <li className="navlinks">
                    <Link to="/login" id='login-button'>Log In</Link>
                </li>
                <li className="navLinks">
                    <img src="assets/search.png" alt=""
                        onClick={handleClick} 
                        style={{cursor:'pointer', zIndex:'15', position:'fixed', marginLeft:isClicked? '400px' : '410px', transition: 'all 0.3s ease'}}
                    />
                    <input type='text' id="search-bar" placeholder="Search" style={{opacity: isClicked ? 1 : 0, zIndex: isClicked ? 1 : 0}} />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;

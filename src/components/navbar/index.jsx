import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'

const Navbar = () => {

    const [searchIsClicked, setSearchIsClicked] = useState(false);

    const handleClick = () => {
        setSearchIsClicked(!searchIsClicked);
    };

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 750);
        };

        // Initial check on component mount
        checkScreenSize();

        // Event listener for screen size changes
        window.addEventListener('resize', checkScreenSize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    const [menuIsClicked, setMenuIsClicked] = useState(false);
    const menuClick = () => {
        setMenuIsClicked(!menuIsClicked);
        console.log(menuIsClicked);
    }

    return (
        <nav id="navbar">
            <div id="logo">
                <Link to="" id='logo-link'>
                    <img src="assets/logo 1.png" alt="Logo" 
                    onClick={() => setMenuIsClicked(false)}/>
                    <span style={{ display: isSmallScreen ? 'none' : 'inline' }}>eWaste Facility Locator</span>
                </Link>
            </div>


            <ul className="nav-links-container" style={{ zIndex: searchIsClicked ? 0 : 2, visibility: isSmallScreen ? (menuIsClicked ? 'visible' : 'hidden') : 'visible' }}>
                <li className="navlinks">
                    <Link to="/locate">
                        <img src="assets/locate.png" alt="" id='locate' onClick={menuClick} data-tooltip-id="my-tooltip" data-tooltip-content="Locate Nearby Facilities" />
                    </Link>
                </li>
                <li className="navlinks">
                    <Link to="/credit">
                        <img src="assets/coins.png" alt="Credit Points" id='credit' onClick={menuClick}
                        data-tooltip-id="my-tooltip" data-tooltip-content="Calculate Credit Points" />
                    </Link>
                </li>
                <li className="navlinks">
                    <Link to="/login" id='login-button' onClick={menuClick}>Log In</Link>
                </li>
                <li className="navLinks">
                    <img src="assets/search.png" alt="Search"
                        onClick={handleClick}
                        id='search-img'
                        style={{ right: isSmallScreen ? '0' : (searchIsClicked ? '0.5em' : '0') }}
                    />
                </li>
                <input type='text' id="search-bar" placeholder="Search" style={{ opacity: searchIsClicked ? 1 : 0, zIndex: searchIsClicked ? 3 : 0 }} />
            </ul>
            <img src="assets/hamburger.png" alt="Menu" id='menu' style={{ display: isSmallScreen ? 'inline' : 'none' }} onClick={menuClick} />

            <Tooltip id='my-tooltip' />
        </nav>

    )
}

export default Navbar;

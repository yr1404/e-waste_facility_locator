import React, { useState } from 'react'
import './styles.scss'

const Home = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };



    return (
        <div className="container">
            <div className="background" style={{ opacity: isHovered ? 0 : 1 }}></div>
            <div className="recycle">

                <img
                    src="assets/recycle-img 1.png"
                    alt="recycleImg"
                    id='recycle-img'
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
                <p className="recycle-text" style={{ opacity: isHovered ? 1 : 0 }}><span>Recycle Today, </span>For a Better Tomorrow</p>

            </div>
        </div>
    )
}

export default Home
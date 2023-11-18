import React from 'react'
import './styles.scss'

const Home = () => {
    return (
        <div>

            <div className="container">
                <img src="assets/background-electronic-devices 1.png" alt="bgImage" />
                <img src="assets/recycle-img 1.png" alt="recycleImg" id='recycle-img' />
            </div>
            <p className="recycle-text">Recycle Today, For a Better Tomorrow</p>
        </div>
    )
}

export default Home
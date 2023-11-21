import React, { useState } from 'react'
import './styles.scss'
import { Link, useNavigate } from 'react-router-dom';

const LogIn = () => {

  const navigate = useNavigate();

  const handleBgClick = (e) => {
    if (e.target.classList.contains('login-container')) {
      navigate(-1);
    }
  }

  return (
    
      <div className="login-container" onClick={handleBgClick}>
        <form action="" className="login-form">
          <h2>Login</h2>
          <div className="username">
            <span>Username</span>
            <div id="username-input">
              <img src="assets/login/user.png" alt="" />
              <input type="text" placeholder='Type Your Username' />
            </div>
          </div>
          <div className="password">
            <span>Password</span>
            <div id="password-input">
              <img src="assets/login/pass.png" alt="" />
              <input type="password" placeholder='Type Your Password' />
            </div>
          </div>
          <button>LogIn</button>
          <a href="">Forgot Password</a>

          <div className="signup">
            <h4>or</h4>
            <Link to="/sign-up">Sign Up</Link>
          </div>

        </form>
      </div>

  )
}

export default LogIn
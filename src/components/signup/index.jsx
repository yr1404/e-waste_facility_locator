import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const handleBgClick = (e) => {
    if (e.target.classList.contains('login-container')) {
      navigate('/');
    }
  }

  return (
    <div className="container">
      <img src="assets/background-electronic-devices 1.png" alt="bgImage" id='bg-image' />

      <div className="login-container" onClick={handleBgClick}>
        <form action="" className="login-form">

          <h2>SignUp</h2>

          <div className="name">
            <span>Name</span>
            <div id="name-input">
              <input type="text" placeholder='' />
            </div>
          </div>

          <div className="username">
            <span>Username</span>
            <div id="username-input">
              <input type="text" placeholder='' />
            </div>
          </div>

          <div className="email">
            <span>Email</span>
            <div id="email-input">
              <input type="text" placeholder='' />
            </div>
          </div>

          <div className="phone">
            <span>Phone Number</span>
            <div id="phone-number-input">
              <input type="tel" placeholder='' />
            </div>
          </div>

          <div className="state">
            <span>State</span>
            <div id="email-input">

              <select name="state" id="state">
                <option value="">Select</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
          </div>

          <div className="pincode">
            <span>Pincode</span>
            <div id="pincode-input">
              <input type="number" placeholder='' />
            </div>
          </div>

          <div className="password">
            <span>Password</span>
            <div id="password-input">
              <input type="password" placeholder='' />
            </div>
          </div>

          <div className="repeat-password">
            <span>Confirm Password</span>
            <div id="confirm-password-input">
              <input type="password" placeholder='' />
            </div>
          </div>

          <div className="role">
            <span>Role</span>
            <div id="role-input">
              <select name="role" id="role">
                <option value="">Select</option>
                <option value="admin">Admin</option>
                <option value="super-admin">Super Admin</option>
                <option value="user">User</option>
              </select>
            </div>
          </div>

          <span>By creating an account you agree to our <a href="">Terms & Policy</a></span>
          <button>SignUp</button>

          <div className="login">
            <h4>or</h4>
            <Link to="/login">LogIn</Link>
          </div>

        </form>
      </div>
    </div>

  )
}

export default SignUp
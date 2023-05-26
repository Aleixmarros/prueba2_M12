import React, { useState, useEffect } from 'react';
import OffcanvasExample from './Header2';
import Home from './Home';
import './login.css';
import SignUp from './signup.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login({ loggedIn, handleLogin }) {
  const [login, setLogin] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-input').value;
    const password = document.querySelector('#password-input').value;

    try {
      const response = await fetch('http://localhost:3005/futmanUsers/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Data: " + data);
        alert(data.message);
        loggedIn = data.loggedIn;
        console.log(loggedIn);

        if (loggedIn === true) {
          setLogin(true);
          handleLogin();
        }
      } else {
        const data = await response.json();
        alert(data.message);
        //throw new Error('Login failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  /*useEffect(() => {
    //do something with the login state
  }, [login]);*/

  return (
    <>
      {login ? (
        <>
          {/* <OffcanvasExample login={login}/> */}
          {/* <Home /> */}
        </>
      ) : (
        <form className='form mx-auto mb-5' onSubmit={handleSubmit}>
          <div className="container text-center justify-content-center">
            <h3>Login</h3><br></br>
            <div className="mb-3">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" id="email-input" required />
            </div>
            {/* <div className="mb-3">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" id="password-input" required />
            </div> */}
            <div className="mb-3">
              <label>Password:</label>
              <input className="form-control" type={showPassword ? 'text' : 'password'} id="password-input"
                placeholder="Enter password"
                required
              /><button
                type="button"
                className="toggle-password-icon"
                onMouseDown={handleTogglePassword}
                onMouseUp={handleTogglePassword}
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                />
              </button>
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label><br></br>
                <a href='/sign-up'>Haven't registered yet?</a>
              </div>
            </div>
            <div className="d-grid">
              {loggedIn ? (
                <p>You are logged in</p>
              ) : (
                <button type="submit" className="btn btn-primary">Submit</button>
              )}
            </div>
            <p className="forgot-password text-right">
              Forgot <a href="/forgot-password">password?</a>{/*profile*/}
            </p>
          </div>
        </form>

      )}
    </>
  );
}

export default Login;

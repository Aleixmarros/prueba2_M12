import React, { useState, useEffect } from 'react';
import './login.css';

var vLogin = false;

function Login({ loggedIn, handleLogin }) {
  const [login, setLogin] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-input').value;
    const password = document.querySelector('#password-input').value;

    fetch('http://localhost:3005/futmanUsers/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert(data.message);
        setLogin(data.loggedIn);
        vLogin = data.loggedIn;
        loggedIn = data.loggedIn;
        console.log(loggedIn);
        //onwaiting={handleLogin};
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    // do something with the login state
  }, [login]);

 

  
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className="container text-center justify-content-center">
        <h3>Login</h3><br></br>
        <div className="mb-3">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" id="email-input" required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" id="password-input" required />
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
            <button type="submit" className="btn btn-primary" onClick={handleLogin}>Submit</button>
          )}
          
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="/profile">password?</a>
        </p>
      </div>
    </form>
  );
}
export default Login;

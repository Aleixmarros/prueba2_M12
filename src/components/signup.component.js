import React, { useState } from 'react';
import Dropzone from "react-dropzone";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function SignUp() {
  const [avatar, setAvatar] = useState(null);

  const handleDrop = (acceptedFiles) => {
    setAvatar(URL.createObjectURL(acceptedFiles[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = document.querySelector('#first-name-input').value;
    const surname = document.querySelector('#last-name-input').value;
    const email = document.querySelector('#email-input').value;
    const password = document.querySelector('#password-input').value;

    fetch('http://localhost:3005/futmanUsers', {
      method: 'POST',
      body: JSON.stringify({ name, surname, email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert(data.message);
      })
      .catch(error => console.error(error));
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className="container text-center justify-content-center ">
        <h3>Sign Up</h3><br></br>
        <div className="mb-3">
          <label>First name</label>
          <input type="text" className="form-control" placeholder="First name" id="first-name-input" required/>
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" id="last-name-input" required/>
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input type="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z]+(\.[a-zA-Z]{2,})+" className="form-control" placeholder="Enter email (abcde123@gmail.com)" id="email-input" required/>
        </div>
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
        <form >
          <div className="mb-3">
            <label htmlFor="avatar" className="form-label">
              Avatar
            </label>
            <Dropzone onDrop={handleDrop}>
              {({ getRootProps, getInputProps }) => (
                <div className="form-control" {...getRootProps()}>
                  <input {...getInputProps()} />
                  {avatar ? (
                    <img src={avatar} alt="Avatar" style={{ height: "100px" }} />
                  ) : (
                    <p>Arrastra una imagen aquí o haz clic para seleccionarla.</p>
                  )}
                </div>
              )}
            </Dropzone>
          </div>
          <button type="submit" className="btn btn-primary" style={{margin: '1vh'}}>
            Guardar
          </button>
        </form>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">login?</a>
        </p>
      </div>
    </form>
  );
}


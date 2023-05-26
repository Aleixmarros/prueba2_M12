import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const ForgotPassword = () => {
    const handleSubmit = (event) => {
        event.preventDefault()

        const email = document.querySelector('#email-input').value;
        const password = document.querySelector('#password-input').value;

        fetch('http://localhost:3005/futmanUsers/forgotPassword', {
            method: 'PUT',
            body: JSON.stringify({ email, password }),
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

    const [showPassword2, setShowPassword2] = useState(false);

    const handleTogglePassword2 = () => {
        setShowPassword2(!showPassword2);
    };

    return (
        <form className='form' id="change-password-form" onSubmit={handleSubmit}>
            <div className='container text-center justify-content-center'>
                <h3>Forgot password</h3>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" id="email-input" required />
                </div>
                <div className="mb-2">
                <label>New Password:</label>
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
                <label>Confirm new Password:</label>
                <input className="form-control" type={showPassword2 ? 'text' : 'password'} id="password-input"
                  placeholder="Enter password"
                  required
                /><button
                type="button"
                className="toggle-password-icon"
                onMouseDown={handleTogglePassword2}
                onMouseUp={handleTogglePassword2}
              >
                <FontAwesomeIcon
                  icon={showPassword2 ? faEye : faEyeSlash}
                />
              </button>
              </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Change password
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Go back <a href="/Login">sign in?</a>
                </p>
            </div>
        </form>
    );
};

export default ForgotPassword;
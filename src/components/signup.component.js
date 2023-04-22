import React, { useState } from 'react';
import Dropzone from "react-dropzone";

export default function SignUp() {
  const [avatar, setAvatar] = useState(null);

  const handleDrop = (acceptedFiles) => {
    setAvatar(URL.createObjectURL(acceptedFiles[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí debes implementar el código para subir la imagen a un servidor o a un servicio de almacenamiento en la nube
    // y guardar la URL de la imagen en la base de datos de tu aplicación.
  };

  return (
    <form className='form'>
      <div className="container text-center justify-content-center ">
        <h3>Sign Up</h3><br></br>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control cen"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <form onSubmit={handleSubmit}>
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

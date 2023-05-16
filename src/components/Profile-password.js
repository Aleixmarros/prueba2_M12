import React, { Component } from 'react'
import Avatar from 'react-avatar';
import messiavatar from '../img/avatar.jpg';

export default class Profile extends Component {
  handleAvatarChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imageDataUrl = reader.result;
      this.setState({ avatar: imageDataUrl }); // Actualizar el estado con la nueva imagen seleccionada
    };
    reader.readAsDataURL(file);
  }
  constructor(props) {
    super(props);
    this.state = {
      avatar: messiavatar, // Imagen inicial
    };
  }
  render() {
    const { avatar } = this.state;

    return (
      <form className='form' >
        <div className="container text-center justify-content-center">
          <h3>Change Password</h3><br></br>
          
          
          <p className="forgot-password text-right">Old password</p>
          <input type="password" className="form-control" placeholder="Enter password" id="password-input" required /><br></br>
          <p className="forgot-password text-right">New password</p>
          <input type="password" className="form-control" placeholder="Enter password" id="password-input" required /><br></br>
          <p className="forgot-password text-right">Repeat new password</p>
          <input type="password" className="form-control" placeholder="Enter password" id="password-input" required />
<br></br>
          <p className="forgot-password text-right">
          <button type="submit" className="btn btn-primary" >Submit</button><br></br>

           <a href="/profile">Profile?</a>
        </p>
        </div>
      </form>
    )
  }
}

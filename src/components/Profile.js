import React, { useEffect, useState } from "react";
import Avatar from 'react-avatar';
import messiavatar from '../img/avatar.jpg';
import Jugadores from '../jugadoresPlay.json';
import Jmaquina from '../maquina.json';
import k1 from '../img/k1.png';

const Profile = () => {
  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imageDataUrl = reader.result;
      setAvatar(imageDataUrl); // Actualizar el estado con la nueva imagen seleccionada
    };
    reader.readAsDataURL(file);
  };
  
  const [avatar, setAvatar] = useState(messiavatar); // Imagen inicial

  const [teamPrices, setTeamPrices] = useState({ equipo1: 0, equipo2: 0 });

  useEffect(() => {
    let totalEquipo1 = 0;
    let totalEquipo2 = 0;

    Jugadores.forEach((player) => {
      totalEquipo1 += player.price;
    });

    Jmaquina.forEach((player) => {
      totalEquipo2 += player.price;
    });

    setTeamPrices({ equipo1: totalEquipo1, equipo2: totalEquipo2 });
  }, []);

  const [teamRatings, setTeamRatings] = useState({ equipo1: 0, equipo2: 0 });

  useEffect(() => {
    let sumRatingEquipo1 = 0;
    let sumRatingEquipo2 = 0;
    let countEquipo1 = 0;
    let countEquipo2 = 0;

    Jugadores.forEach((player) => {
      sumRatingEquipo1 += player.rating;
      countEquipo1++;
    });

    Jmaquina.forEach((player) => {
      sumRatingEquipo2 += player.rating;
      countEquipo2++;
    });

    const avgRatingEquipo1 = countEquipo1 > 0 ? sumRatingEquipo1 / countEquipo1 : 0;
    const avgRatingEquipo2 = countEquipo2 > 0 ? sumRatingEquipo2 / countEquipo2 : 0;

    setTeamRatings({ equipo1: avgRatingEquipo1, equipo2: avgRatingEquipo2 });
  }, []);


    return (
      <form className='form' >
        <div className="container text-center justify-content-center">
          <h3>Profile</h3><br></br>
          <div className="mb-3">
          <input
              type="file"
              id="avatar-input"
              accept="image/*"
              size="60"
              style={{ display: 'none' }}
              onChange={handleAvatarChange}
            />
            <label htmlFor="avatar-input">
              <Avatar src={avatar} size="60" round={true} style={{ marginRight: '10px' }} />
            </label>
            <label>Ejemplo Username</label>
          </div>
          <div className="mb-3">
            <label style={{ marginRight: "10px" }}>Email:</label>
            <label>Email@gmail.com</label>
          </div>
          <div className="mb-3">
  
          <p><img src={k1} style={{ width: "5vh",marginRight: "10px", borderRadius: "50%" }} alt="k1" />  K1LLERS TEAM  </p>

            <label>Media de K1LLERS TEAM: {teamRatings.equipo1.toFixed(2)}</label><br></br><br></br>
            <label>Precio total K1LLERS TEAM: {typeof teamPrices.equipo1 === 'number' ? teamPrices.equipo1.toLocaleString() : teamPrices.equipo1}€</label>


          </div>
          <p className="forgot-password text-right">
          Change <a href="/profile2">password?</a>
        </p>
        </div>
      </form>
    );
  };
  export default Profile;


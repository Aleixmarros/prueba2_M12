import React, { useState, useEffect } from 'react';
import '../App.css';
import fcard from './imgJugadores/1.png';
import jugadoresLS_53 from '../JugadoresLS_53.json';

const Jimg = ({ src, alt }) => {
  const [images, setImages] = useState({});

  useEffect(() => {
    // Carga las imágenes de los jugadores
    jugadoresLS_53.slice(0, 15).forEach((player) => {
      import(`./imgJugadores/${player.id}.png`).then((image) => {
        setImages((prevState) => ({
          ...prevState,
          [player.id]: image.default,
        }));
      });
    });
  }, []);

  return (
    <>
      {jugadoresLS_53.slice(0, 15).map((player) => (
        <div className='players-container' key={player.id}>
          <div className='Jimg' style={{ position: 'relative', textAlign: 'center' }}>
            <img src={fcard} alt="card" className='Jimg' style={{ height: 750 }} />
            <div className='datosCard' style={{ textAlign: 'center' }}>
              <p style={{ position: 'absolute', marginLeft: 85, marginTop: 110, top: 0, left: 0, fontSize: 70, color: 'black' }}>{player.position}</p>
              <p style={{ position: 'absolute', marginLeft: 350, marginTop: 110, top: 0, left: 0, fontSize: 70, color: 'black' }}>{player.rating}</p>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-320px' }}>
                <h4 style={{ color: 'black' }}>{player.name}</h4>
              </div>
              <p style={{ position: 'absolute', marginLeft: 120, marginTop: 410, top: 0, left: 0, fontSize: 100, color: 'red' }}>{player.attack}</p>
              <p style={{ position: 'absolute', marginLeft: 280, marginTop: 410, top: 0, left: 0, fontSize: 100, color: 'green' }}>{player.defense}</p>
            </div>
            <img src={images[player.id]} style={{ position: 'absolute', marginLeft: 80, marginTop: 47, top: 0, left: 0, height: 350 }} alt="Imagen del jugador" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Jimg;

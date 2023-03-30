import React, { useState, useEffect} from 'react';
import jugadoresLS_53 from '../JugadoresLS_53.json';
import '../App.css';
import laliga from '../img/laliga-logo.png';

function Players() {
  const [player, setPlayer] = useState({});
  const [playerId, setPlayerId] = useState(2706);
  const [errorMessage, setErrorMessage] = useState('');


  const handleIdSubmit = (e) => {
    e.preventDefault();
    setPlayerId(e.target.value);
  };

  const handleChange = (e) => {
    setPlayerId(e.target.value);
  };

  const getPlayerById = (idOrName) => {
    const foundPlayer = jugadoresLS_53.find(player => {
      // Si el idOrName es un número, busca por id
      if (!isNaN(idOrName)) {
        return player.id === parseInt(idOrName);
      }
      // Si el idOrName es una string, busca por nombre
      else {
        return player.name.toLowerCase().includes(idOrName.toLowerCase());
      }
    });
    if (foundPlayer) {
      setPlayer(foundPlayer);
      setErrorMessage('');
    } else {
        setErrorMessage('ID inválido');
        }
  };

  useEffect(() => {
    getPlayerById(playerId);

  }, [playerId]);
  const [imageSrc, setImageSrc] = useState('');
  
  useEffect(() => {
    // Importa la imagen usando la ruta relativa
    import(`./imgJugadores/${player.id}.png`).then(image => setImageSrc(image.default));
  }, [player.id]);
  return (
    <div>
      <h2>{player.name} </h2>
      <h4>Valoración: {player.rating}</h4>
      <p>Posición: {player.position}</p>
      <p>Liga: {player.league} <img src={laliga} style={{height: 40}} alt="Imagen de la liga"/></p>
      <p>Club: {player.club}</p>
      <p>Price: {player.price}</p>
      <p>Categoria: {player.color}</p>
      <p>Pie preferido: {player.foot}</p>
      <p>Edad: {player.age}</p>
      <form onSubmit={handleIdSubmit}>
        <input type="text" className="inForm" style={{ color: 'black' }} name="playerId" onChange={handleChange} />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>
      <img src={imageSrc} style={{height: 500}} alt="Imagen del jugador" />
    </div>
  );
}

export default Players;

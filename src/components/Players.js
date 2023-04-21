import React, { useState, useEffect } from 'react';
import jugadoresLS_53 from '../JugadoresLS_53.json';
import '../App.css';
import laliga from '../img/laliga-logo.png';
import fcard from './imgJugadores/1.png';
import CardJ from './ImgJ';

function Players() {
  const [player, setPlayer] = useState({});
  const [playerId, setPlayerId] = useState(2706);
  const [errorMessage, setErrorMessage] = useState('');
  const [jugadoresOrdenados, setJugadoresOrdenados] = useState([]);
  const [searchValue, setSearchValue] = useState('');


  // const handleIdSubmit = (e) => {
  //   e.preventDefault();
  //   setPlayerId(e.target.value);
  // };

  const handleChange = (e) => {
    setPlayerId(e.target.value);
    setSearchValue(e.target.value);

  };

  // Ordena los jugadores por rating al cargar el componente

  useEffect(() => {
    const jugadores = [...jugadoresLS_53];
    jugadores.sort((a, b) => b.rating - a.rating);
    setJugadoresOrdenados(jugadores);
  }, []);

  const handleIdSubmit = (e) => {
    e.preventDefault();
    getPlayerById(playerId);
  };


  const handleSelectChange = (e) => {
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
  // const getPlayerById = (id) => {
  //   const foundPlayer = jugadoresLS_53.find((player) => player.id === parseInt(id));
  //   if (foundPlayer) {
  //     setPlayer(foundPlayer);
  //     setErrorMessage('');
  //   } else {
  //     setErrorMessage('ID inválido');
  //   }
  // };

  useEffect(() => {
    getPlayerById(playerId);
  }, [playerId]);

  useEffect(() => {
    const jugadoresFiltrados = jugadoresLS_53.filter((jugador) =>
      jugador.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setJugadoresOrdenados(jugadoresFiltrados);
  }, [searchValue]);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    // Importa la imagen usando la ruta relativa
    import(`./imgJugadores/${player.id}.png`).then((image) => setImageSrc(image.default));
  }, [player.id]);

  return (
    <div className='players-container'>
      <h2>{player.name} </h2>
      <h4>Valoración: {player.rating}</h4>
      <p>Posición: {player.position}</p>
      <p>
        Liga: {player.league} <img src={laliga} style={{ height: 40 }} alt="Imagen de la liga" />
      </p>
      <p>Club: {player.club}</p>
      <p>Categoria: {player.color}</p>
      <p>Pie preferido: {player.foot}</p>
      <p>Edad: {player.age}</p>
      <h4 className='precio'>Precio: {typeof player.price === 'number' ? player.price.toLocaleString() : player.price}€</h4>
      <form className='jform' onSubmit={handleIdSubmit}>
        <h4>Busca tu jugador ideal</h4>
        <input type="text" className="inForm input" style={{ color: 'black' }} name="playerId" onChange={handleChange} />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <select className='listaJugadores' value={playerId} onChange={handleSelectChange}>
          {jugadoresOrdenados.map((player) => (
            <option key={player.id} value={player.id}>
              {player.name} ({player.rating})
            </option>
          ))}
        </select>
        <button className='jbutton' type="submit">Comprar Jugador</button>
      </form>
      <div className='Jimg' style={{ position: 'relative', textAlign: 'center'}}>
        <CardJ />
        <h4 style={{ position: 'absolute', marginLeft: 120,   marginTop: 425, top: 0 , left: 0,  height: 350, color: 'black' }}> {player.name} ({player.rating})</h4>
        {/* <img src={fcard} alt="card" style={{ height: 750}} /> */}
        <img src={imageSrc} style={{ position: 'absolute', marginLeft: 75,  marginTop: 75, top: 0 , left: 0,  height: 350 }} alt="Imagen del jugador" />
      </div>


    </div>
  );
}

export default Players;

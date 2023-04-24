import React, { useState, useEffect } from 'react';
import jugadoresLS_53 from '../JugadoresLS_53.json';
import '../App.css';
import laliga from '../img/laliga-logo.png';
 import fcard from './imgJugadores/1.png';

function Players() {
  const [player, setPlayer] = useState({});
  const [players, setPlayers] = useState([]);
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
    setJugadoresOrdenados(jugadores);
    jugadores.sort((a, b) => b.rating - a.rating);
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
    // Función para obtener los datos de la API
    const obtenerDatos = async () => {
      try {
        const response = await fetch('https://github.com/Aleixmarros/prueba2_M12/blob/19794a19316e3ff49c43f5c1918b1043fbe17745/futmanDB.json'); // URL de DB Joan
        const data = await response.json(); // Obtener los datos en formato JSON

        // Transformación de los datos obtenidos
        const jugadoresApi = data.map(player => {
          return {
            PlayerID: playerId,
            nombre: player.name, // Cambiar 'name' a 'nombre'
            TeamID: player.Teamid,
            Goals: player.goals,
            IdTorneo: player.IdTorneo,
            Titularidades: player.Titularidades,
            ...player // Mantener las demás propiedades del objeto sin cambios
          }
        });

        setPlayers(jugadoresApi); // Actualizar el estado con los datos transformados
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    }
    obtenerDatos(); // Llamada a la función obtenerDatos al cargar el componente
  }, []);

  const enviarPlayers = (player) => {
    setPlayers([...players, player]); // Agregar una nueva persona al final de la lista de personas utilizando el operador spread
  }

  // const MyTeam = (players) => {
  //   this.setState({
  //     players: [...this.state.players, Players]
  //   });
  //   // file:///E:/M12/React/prueba2/prueba2/futmanDB.json
  // }
  useEffect(() => {
    getPlayerById(playerId);
  }, [playerId]);

  useEffect(() => {
    const jugadores = [...jugadoresLS_53];
    jugadores.sort((a, b) => b.rating - a.rating);
    setJugadoresOrdenados(jugadores);
  }, []);

  useEffect(() => {
    const jugadoresFiltrados = jugadoresLS_53.filter((jugador) =>
      jugador.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    const jugadoresOrdenados = [...jugadoresFiltrados].sort((a, b) => b.rating - a.rating);
    setJugadoresOrdenados(jugadoresOrdenados);
  }, [searchValue]);

  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    // Importa la imagen usando la ruta relativa
    import(`./imgJugadores/${player.id}.png`).then((image) => setImageSrc(image.default));
  }, [player.id]);

  return (
    <div className='players-container'>
      {/* <h2>{player.name} </h2>
      <h4>Valoración: {player.rating}</h4> */}
      <h2>Players</h2>
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
        <button className='jbutton' type="button" onClick={enviarPlayers} style={{margin: '1vh'}}>Comprar Jugador</button>
      </form>
      <h4 className='precio'>Precio: {typeof player.price === 'number' ? player.price.toLocaleString() : player.price}€</h4>
      <div className='Jimg' style={{ position: 'relative', textAlign: 'center' }}>
        <img src={fcard}alt="card" className='Jimg' style={{ height: 750}}/>
        {/* <CardJ /> */}
        <div className='datosCard' style={{ textAlign: 'center' }}>
          <p style={{ position: 'absolute', marginLeft: 85, marginTop: 110, top: 0, left: 0, fontSize: 70, color: 'black' }}>{player.position}</p>
          <p style={{ position: 'absolute', marginLeft: 350, marginTop: 110, top: 0, left: 0, fontSize: 70, color: 'black' }}>{player.rating}</p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-320px' }}>
            <h4 style={{ color: 'black' }}>{player.name}</h4>
          </div>
          <p style={{ position: 'absolute', marginLeft: 120, marginTop: 410, top: 0, left: 0, fontSize: 100, color: 'red' }}>{player.attack}</p>
          <p style={{ position: 'absolute', marginLeft: 280, marginTop: 410, top: 0, left: 0, fontSize: 100, color: 'green' }}>{player.defense}</p>
        </div>
        <img src={imageSrc} style={{ position: 'absolute', marginLeft: 80, marginTop: 47, top: 0, left: 0, height: 350 }} alt="Imagen del jugador" />
      </div>
      <div className='datosjug' style={{marginTop:'190px',  justifyContent: 'center', alignItems: 'center',}}>
      <h4>Datos adicionales del jugador</h4>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', color: 'black'}}>
      <div style={{color:'black', justifyContent: 'center', alignItems: 'center',}}>
      <p>Pie preferido: {player.foot}</p>
      <p>Altura: {player.height} cm</p>
      <p>Edad: {player.age}</p>
      </div>
      <div style={{color:'black', justifyContent: 'center', alignItems: 'center',}}>
      <p>Club: {player.club}</p>
      <p>Categoria: {player.color}</p>
      <p>
        Liga: {player.league} <img src={laliga} style={{ height: 40 }} alt="Imagen de la liga" />
      </p>
      
      
      </div>
      </div>

      </div>
    </div>
  );
}

export default Players;

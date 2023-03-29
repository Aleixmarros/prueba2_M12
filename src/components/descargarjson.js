import React, { useState, useEffect } from 'react';
import '../App.css';


function Teams() {
  const [player, setPlayer] = useState({});
  const id = 39;
  // const [playerId, setPlayerId] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://futdb.app/api/players?page=${id}`,
        {
          method: 'GET',
          headers: {
            'X-AUTH-TOKEN': 'd856397f-6543-4eb9-8170-9969d6a559cb'
          }
        }
      );

      const data = await response.json();
      setPlayer(data.player);

      // Guardar la respuesta JSON en un archivo
      const jsonString = JSON.stringify(data);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'jugadores'+(id)+'.json';
      document.body.appendChild(link);
      link.click();
    };
    fetchData();
  }, []);

  // const handleIdSubmit = (e) => {
  //   e.preventDefault();
  //   setPlayerId(e.target.value);
  // };

  // const handleChange = (e) => {
  //   setPlayerId(e.target.value);
  // };

  return (
    <div>
      {/* <h2>{player.name} </h2>
      <h4>Valoración: {player.rating}</h4>
      <p>Posición: {player.position}</p>
      <p>Categoria: {player.color}</p>
      <p>Pie preferido: {player.foot}</p>
      <p>Edad: {player.age}</p>
      <form onSubmit={handleIdSubmit}>
        <input type="text" className='inForm' style={{ color: "black" }} name='playerId' onChange={handleChange} />
      </form> */}
    </div>
  );
}

export default Teams;

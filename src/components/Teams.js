import React, { useState, useEffect } from 'react';
// import a from '../img/17227.png';
// import axios from 'axios';
import '../App.css';

function Teams() {
  const [player, setPlayer] = useState({});
  // const [img, setImg] = useState({});
  const [playerId, setPlayerId] = useState();
  // 17227
  useEffect(() => {
    // setPlayerId(17225);
    const fetchData = async () => {
      const response = await fetch(
        `https://futdb.app/api/players?page=99`,
        {
          responseType: 'arraybufer',
          method: 'GET',
          headers: {
            'X-AUTH-TOKEN': 'd856397f-6543-4eb9-8170-9969d6a559cb'
          }

        },
      );



      // const imageBlob = new Blob([response], { type: 'image/png' });
      // const imageUrl = URL.createObjectURL(imageBlob);
      // console.log(imageBlob);
      // console.log(imageUrl);
      // console.log(response);
      // setImg(imageUrl);

      const data = await response.json();
      const jugadores = data.map((jugador) => {
        return {
          nombre: jugador.name,
          equipo: jugador.club,
          posicion: jugador.position,
          liga: jugador.league,
          edad: jugador.age,
          pais: jugador.nation,
          valoracion: jugador.rating
        };
      });
      const jsonString = JSON.stringify(jugadores);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'jugadores.json';
  document.body.appendChild(link);
  link.click();
  document.writeFile(link, jsonString, err => {
    if (err) {
      console.log('Error al guardar el archivo', err);
    } else {
      console.log('Los datos han sido guardados en el archivo', link);
    }
  });

      console.log(data.player.league);

      if(data.player.league === 13){
        console.log("test entro 2")
      }

      
      setPlayer(data.player);
      // console.log(player.name);




    };
    fetchData();
  }, [playerId]);

  const handleIdSubmit = (e) => {
    console.log(e.target.value)
    e.preventDefault();
    setPlayerId(e.target.value);

  }
  const handleChange = (e) =>{
    setPlayerId(e.target.value);
  }
  return (
    <div>
      <h2>{player.name} </h2>
      <h4>Valoración: {player.rating}</h4>
      <p>Posición: {player.position}</p>
      <p>Categoria: {player.color}</p>
      <p>Pie preferido: {player.foot}</p>
      <p>Edad: {player.age}</p>
      <form onSubmit={handleIdSubmit}>
      <input type="text" className='inForm'  style={{color: "black"}}  name='playerId' onChange={handleChange}/>
      {/* <input type="submit" className='inForm'/> */}

      </form>
      {/* <img src={img} alt="a" height={500} width={"auto"} /> */}
    </div>
  );
}

export default Teams;


import React, { useState, useEffect } from 'react';
// import a from '../img/17227.png';
import jugadoresLS_53 from '../JugadoresLS_53.json'
import axios from 'axios';
import '../App.css';

function Teams() {
  const [player, setPlayer] = useState({});
  const [img, setImg] = useState({});
  const [playerId, setPlayerId] = useState(17700);
  // 17227
  useEffect(() => {
    // setPlayerId(17225);

    axios.get(`https://futdb.app/api/players/${playerId}/image`, {
      responseType: 'arraybuffer',
      headers: {
        'X-AUTH-TOKEN': 'd856397f-6543-4eb9-8170-9969d6a559cb'
      },
    })
      .then((response) => {
        const imageBlob = new Blob([response.data], { type: 'image/png' });
        const imageUrl = URL.createObjectURL(imageBlob);
        // console.log(imageBlob);
        // console.log(response);
        setImg(imageUrl);
      })

    const fetchData = async () => {
      const response = await fetch(
        `https://futdb.app/api/players/${playerId}`,
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
      <img src={img} alt="a" height={500} width={"auto"} />
    </div>
  );
}

export default Teams;


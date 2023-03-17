import React, { useState, useEffect } from 'react';
// import a from '../img/17227.png';
import axios from 'axios';

function Teams() {
  const [player, setPlayer] = useState({});
  const [img, setImg] = useState({});
  const [playerId, setPlayerId] = useState();
  useEffect(() => {
    setPlayerId(17225);

    axios.get(`https://futdb.app/api/players/${playerId}/image`, {
      responseType: 'arraybuffer',
      headers: {
        'X-AUTH-TOKEN': 'd856397f-6543-4eb9-8170-9969d6a559cb'
      },
    })
      .then((response) => {
        const imageBlob = new Blob([response.data], { type: 'image/png' });
        const imageUrl = URL.createObjectURL(imageBlob);
        console.log(imageBlob);
        console.log(response);
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

      const imageBlob = new Blob([response], { type: 'image/png' });
      const imageUrl = URL.createObjectURL(imageBlob);
      console.log(imageBlob);
      console.log(imageUrl);
      console.log(response);
      // setImg(imageUrl);

      const data = await response.json();
      // // console.log(data)
      setPlayer(data.player);
      // console.log(player.name);




    };
    fetchData();
  }, [playerId]);

  return (
    <div>
      <h2>{player.name} </h2>
      <p>Posición: {player.position}</p>
      <p>Categoria: {player.color}</p>
      <p>Valoración: {player.rating}</p>
      <p>Pie preferido: {player.foot}</p>
      <img src={img} alt="a" />
    </div>
  );
}

export default Teams;
import React, { useEffect, useState } from "react";
import "../App.css";
import "./Play.css";
import Jugadores from '../jugadoresPlay.json';
import Jmaquina from '../maquina.json';
import fcard from './imgJugadores/1.png';
import pepe from '../img/pepe.png';
import k1 from '../img/k1.png';

const selectedPlayerIds = [];


function Team2() {


const PlayerList = (player) => {
  const Player = ({ player, onSelectPlayer }) => {
    const [images, setImages] = useState({});
    const [showOptions, setShowOptions] = useState(false);
    const [selectedPlayer, setSelectedPlayer] = useState({});
    const [firstClickPlayer, setFirstClickPlayer] = useState(null);
    const [secondClickPlayer, setSecondClickPlayer] = useState(null);
     
    
    
    useEffect(() => {
      Jugadores.forEach((player) => {
        import(`./imgJugadores/${player.id}.png`).then((image) => {
          setImages((prevState) => ({
            ...prevState,
            [player.id]: image.default,
          }));
        });
      });
  
      
    }, []);
  
   
  
    return (
      <div key={player.id} >
        <div className='players-container' key={player.id} style={{ margin: '-41px', padding: 0 }}>
          <div className='JimgM' style={{ position: 'relative', textAlign: 'center' }}>
            <img src={fcard} alt="card" className='Jimg' style={{ height: 250 }} />
            <div className='datosCard' style={{ textAlign: 'center' }}>
              <p style={{ position: 'absolute', marginLeft: 27, marginTop: 10, top: 0, left: 0, fontSize: 30, color: 'black' }}>{player.position}</p>
              <p style={{ position: 'absolute', marginLeft: 110, marginTop: 10, top: 0, left: 0, fontSize: 30, color: 'black' }}>{player.rating}</p>
              <p style={{ position: 'absolute', marginLeft: 35, marginTop: 110, top: 0, left: 0, fontSize: 40, color: 'red' }}>{player.attack}</p>
              <p style={{ position: 'absolute', marginLeft: 90, marginTop: 110, top: 0, left: 0, fontSize: 40, color: 'green' }}>{player.defense}</p>
            </div>
            <img src={images[player.id]} style={{ position: 'absolute', marginLeft: 35, marginTop: 10, top: 0, left: 0, height: 100 }} alt="Imagen del jugador" />
          </div>
        </div>
        
      </div>
  
    );
  };
  // Jugadores
  const playerIdToShow = 17226; // ID del jugador que quieres mostrar
  const playerToShow = Jugadores.find(player => player.id === playerIdToShow);
  selectedPlayerIds.push(playerToShow);
  const playerIdToShow2 = 4251; // ID del jugador que quieres mostrar
  const playerToShow2 = Jugadores.find(player => player.id === playerIdToShow2);
  selectedPlayerIds.push(playerToShow2);
  const playerIdToShow3 = 7592; // ID del jugador que quieres mostrar
  const playerToShow3 = Jugadores.find(player => player.id === playerIdToShow3);
  selectedPlayerIds.push(playerToShow3);
  const playerIdToShow4 = 17134; // ID del jugador que quieres mostrar
  const playerToShow4 = Jugadores.find(player => player.id === playerIdToShow4);
  selectedPlayerIds.push(playerToShow4);
  const playerIdToShow5 = 7555; // ID del jugador que quieres mostrar
  const playerToShow5 = Jugadores.find(player => player.id === playerIdToShow5);
  selectedPlayerIds.push(playerToShow5);
  const playerIdToShow6 = 16242; // ID del jugador que quieres mostrar
  const playerToShow6 = Jugadores.find(player => player.id === playerIdToShow6);
  selectedPlayerIds.push(playerToShow6);
  const playerIdToShow7 = 17230; // ID del jugador que quieres mostrar
  const playerToShow7 = Jugadores.find(player => player.id === playerIdToShow7);
  selectedPlayerIds.push(playerToShow7);
  const playerIdToShow8 = 17232; // ID del jugador que quieres mostrar
  const playerToShow8 = Jugadores.find(player => player.id === playerIdToShow8);
  selectedPlayerIds.push(playerToShow8);
  const playerIdToShow9 = 4380; // ID del jugador que quieres mostrar
  const playerToShow9 = Jugadores.find(player => player.id === playerIdToShow9);
  selectedPlayerIds.push(playerToShow9);
  const playerIdToShow10 = 10117; // ID del jugador que quieres mostrar
  const playerToShow10 = Jugadores.find(player => player.id === playerIdToShow10);
  selectedPlayerIds.push(playerToShow10);
  const playerIdToShow11 = 3978; // ID del jugador que quieres mostrar
  const playerToShow11 = Jugadores.find(player => player.id === playerIdToShow11);
  selectedPlayerIds.push(playerToShow11);


return (
  <div className="wrapper">
    <article>
      


        {/* <button onClick={comparePlayers}>Comparar jugadores</button> */}


      <section className="ContainerPlay2">
        <div className="futbolistas" style={{ position: 'fixed', marginBottom: '-90px', height: '50px' , marginLeft: '35px', padding: 0}}>

          <div className="j1j" >
          <Player player={playerToShow}  />

          </div>

          <div className="j2j">
            <Player player={playerToShow2}  />

          </div>
          <div className="j3j">
            <Player player={playerToShow3}  />

          </div>
          <div className="j4j">
            <Player player={playerToShow4}  />

          </div>
          <div className="j5j">
            <Player player={playerToShow5}  />

          </div>
          <div className="j6j">
            <Player player={playerToShow6}  />

          </div>
          <div className="j7j">
            <Player player={playerToShow7}  />

          </div>
          <div className="j8j">
            <Player player={playerToShow8}  />

          </div>
          <div className="j9j">
            <Player player={playerToShow9}  />

          </div>
          <div className="j10j">
            <Player player={playerToShow10}  />

          </div>
          <div className="j11j">
            <Player player={playerToShow11} />

          </div>
          
        </div>
      </section>
    </article>
  </div>
  
);
};
return (PlayerList());
}

export default Team2;
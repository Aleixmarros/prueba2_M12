import React, { useEffect, useState } from "react";
import "../App.css";
import "./Play.css";
import Jugadores from '../jugadoresPlay.json';
import Jmaquina from '../maquina.json';
import fcard from './imgJugadores/1.png';
import pepe from '../img/pepe.png';
import k1 from '../img/k1.png';




const Player = ({ player, onSelectPlayer }) => {
    const [images, setImages] = useState({});
    const [showOptions, setShowOptions] = useState(false);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [firstClickPlayer, setFirstClickPlayer] = useState(null);
    const [secondClickPlayer, setSecondClickPlayer] = useState(null);
  
    const handlePlayerClick = (player) => {
      setShowOptions(true);
      setSelectedPlayer(player);
    };
  
    const handleSelectPlayer = (player) => {
      if (!firstClickPlayer) {
        setFirstClickPlayer(player);
        console.log('Primer jugador seleccionado');
      } else if (!secondClickPlayer) {
        setSecondClickPlayer(player);
        console.log('Segundo jugador seleccionado');
        comparePlayers(player);
      } else {
        console.log('Ya se han seleccionado dos jugadores');
      }
    };
    const handleSelectPlayerA = (player) => {
        if (!firstClickPlayer) {
          setFirstClickPlayer(player);
          console.log('Primer jugador seleccionado');
        } else if (!secondClickPlayer) {
          setSecondClickPlayer(player);
          console.log('Segundo jugador seleccionado');
          comparePlayers(player);
        } else {
          console.log('Ya se han seleccionado dos jugadores');
        }
      };
      
      const handleSelectPlayerD = (player) => {
        if (!firstClickPlayer) {
          console.log('Selecciona primero el jugador A');
        } else if (!secondClickPlayer) {
          setSecondClickPlayer(player);
          console.log('Segundo jugador seleccionado');
        //   comparePlayers(player);
        } else {
          console.log('Ya se han seleccionado dos jugadores');
        }
      };
      
      const comparePlayers = () => {
        if (firstClickPlayer && secondClickPlayer) {
          const attackDiff = firstClickPlayer.attack - secondClickPlayer.defense;
          const defenseDiff = firstClickPlayer.defense - secondClickPlayer.attack;
          console.log(`Diferencia de ataque: ${attackDiff}`);
          console.log(`Diferencia de defensa: ${defenseDiff}`);
        } else {
          console.log('No se han seleccionado dos jugadores');
        }
      };
      
      
  
    useEffect(() => {
      Jugadores.forEach((player) => {
        import(`./imgJugadores/${player.id}.png`).then((image) => {
          setImages((prevState) => ({
            ...prevState,
            [player.id]: image.default,
          }));
        });
      });
  
      Jmaquina.forEach((player) => {
        import(`./imgJugadores/${player.id}.png`).then((image) => {
          setImages((prevState) => ({
            ...prevState,
            [player.id]: image.default,
          }));
        });
      });
    }, []);
  
    return (
      <div key={player.id} onClick={() => handlePlayerClick(player)}>
        <div className='players-container' key={player.id} style={{ margin: '-41px' }}>
          <div className='JimgM' style={{ position: 'relative', textAlign: 'center' }}>
            <img src={fcard} alt="card" className='Jimg' style={{ height: 250 }} />
            <div className='datosCard' style={{ textAlign: 'center' }}>
              <p style={{ position: 'absolute', marginLeft: 27, marginTop: 10, top: 0, left: 0, fontSize: 30, color: 'black' }}>{player.position}</p>
              <p style={{ position: 'absolute', marginLeft: 110, marginTop: 10, top: 0, left: 0, fontSize: 30, color: 'black' }}>{player.rating}</p>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-320px' }}></div>
              <p style={{ position: 'absolute', marginLeft: 35, marginTop: 110, top: 0, left: 0, fontSize: 40, color: 'red' }}>{player.attack}</p>
              <p style={{ position: 'absolute', marginLeft: 90, marginTop: 110, top: 0, left: 0, fontSize: 40, color: 'green' }}>{player.defense}</p>
            </div>
            <img src={images[player.id]} style={{ position: 'absolute', marginLeft: 35, marginTop: 10, top: 0, left: 0, height: 100 }} alt="Imagen del jugador" />
          </div>
        </div>
        {showOptions && (
          <div>
            <button onClick={() => handleSelectPlayerA(player)} style={{ position: "absolute", color: 'red' , marginLeft: 6, marginTop: 88, top: 0, left: 0, fontSize: 40, background: 'transparent', border: 'none', fontFamily: "fantasy"}}>{player.attack}</button>
            <button onClick={() => handleSelectPlayerD(player)} style={{  position: "absolute", color: 'green' , marginLeft: 64, marginTop: 88, top: 0, left: 0, fontSize: 40, background: 'transparent', border: 'none', fontFamily: "fantasy"}}>{player.defense}</button>
          </div>
        )}
      </div>
    );
  };
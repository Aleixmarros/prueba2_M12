import React, { useEffect, useState } from "react";
import "../App.css";
import "./Play.css";
import Jugadores from '../jugadoresPlay.json';
import fcard from './imgJugadores/1.png';




function Play() {

  const Player = ({ player, handleSelectPlayer }) => {
    const [images, setImages] = useState({});
    const [showOptions, setShowOptions] = useState(false);
    
  
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
  
    const handlePlayerClick = () => {
      setShowOptions(true);
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
    }, []);
    return (
      <div key={player.id} onClick={() => handlePlayerClick(player)}>
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
        {showOptions && (
            <div>
              <button onClick={() => handleSelectPlayer(player, "attack")} style={{ position: "absolute", color: 'red' , marginLeft: -10, marginTop: 68, top: 0, left: 0, fontSize: 40, background: 'transparent', border: 'none', fontFamily: "fantasy"}}>{player.attack}</button>
              <button onClick={() => handleSelectPlayer(player, "defense")} style={{  position: "absolute", color: 'green' , marginLeft: 45, marginTop: 68, top: 0, left: 0, fontSize: 40, background: 'transparent', border: 'none', fontFamily: "fantasy"}}>{player.defense}</button>  
            </div>
          )}
      </div>
  
    );
  };


  const PlayerList = (player) => {
      // Jugadores
      const playerIdToShow = 17226; // ID del jugador que quieres mostrar
      const playerToShow = Jugadores.find((player) => player.id === playerIdToShow);
      const playerIdToShow2 = 4251; // ID del jugador que quieres mostrar
      const playerToShow2 = Jugadores.find((player) => player.id === playerIdToShow2);
      const playerIdToShow3 = 7592; // ID del jugador que quieres mostrar
      const playerToShow3 = Jugadores.find(player => player.id === playerIdToShow3);
      const playerIdToShow4 = 17134; // ID del jugador que quieres mostrar
      const playerToShow4 = Jugadores.find(player => player.id === playerIdToShow4);
    const [selectedPlayerAttack, setSelectedPlayerAttack] = useState(null);
    const [selectedPlayerDefense, setSelectedPlayerDefense] = useState(null);
    const [selectedPlayer1, setSelectedPlayer1] = useState(null);
    const [selectedPlayer2, setSelectedPlayer2] = useState(null);
    const [result, setResult] = useState("");
    const [selectedValue, setSelectedValue] = useState("");


    
  
    const handleSelectPlayer = (player, valueType) => {
      if (valueType === "attack") {
        setSelectedPlayerAttack(player);
        setSelectedValue(`Ataque: ${player.attack}`);
      } else if (valueType === "defense") {
        setSelectedPlayerDefense(player);
        setSelectedValue(`Defensa: ${player.defense}`);
      }
    
      if (selectedPlayerAttack && selectedPlayerDefense) {
        comparisonResult();
      }
    };
    
    const comparisonResult = () => {
      if (selectedPlayerAttack && selectedPlayerDefense) {
        let result = "";
        if (selectedPlayerAttack.attack > selectedPlayerDefense.defense) {
          result = `${selectedPlayerAttack.name} ha ganado`;
        } else if (selectedPlayerAttack.attack < selectedPlayerDefense.defense) {
          result = `${selectedPlayerDefense.name} ha ganado`;
        } else {
          result = "El ataque y la defensa son iguales";
        }
        setResult(result);
      }
    };
    
    


    return (
      <div className="wrapper">
        <article>
          {/* <button onClick={comparisonResult}>Comparar jugadores</button> */}
          <h3 style={{position: "absolute"}}>{result}</h3>
          <h3 style={{position: "absolute", marginTop: '10vh'}}>{selectedValue}</h3>


          <section className="ContainerPlay">
            <div
              className="futbolistas"
              style={{
                position: "fixed",
                marginBottom: "-90px",
                height: "50px",
                marginLeft: "35px",
                padding: 0,
              }}
            >
              <div className="j1">
                <Player player={playerToShow} handleSelectPlayer={handleSelectPlayer} />
              </div>
              <div className="j2">
                <Player player={playerToShow2} handleSelectPlayer={handleSelectPlayer}/>
              </div>
              <div className="j3">
            <Player player={playerToShow3} handleSelectPlayer={handleSelectPlayer} />

          </div>
          <div className="j4">
            <Player player={playerToShow4} handleSelectPlayer={handleSelectPlayer} />

          </div>
            </div>
          </section>
        </article>
      </div>
    );
  };
  

return (PlayerList());
}

export default Play;
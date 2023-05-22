import React, { useEffect, useState } from "react";
import "../App.css";
import "./Play.css";
import Jugadores from '../jugadoresPlay.json';
import fcard from './imgJugadores/1.png';

function Play() {
  const [jugadores, setJugadores] = useState(Jugadores);

  
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
      if (player.isActive) {
        setShowOptions(true);
        handleSelectPlayer(player);
        
      }
    };

    return (
      <div className={`player ${!player.isActive ? "inactive" : ""}`}  key={player.id} onClick={() => handlePlayerClick()}>
        <div className='players-container' key={player.id} style={{ margin: '-41px', padding: 0 }}>
          <div className='JimgM' style={{ position: 'relative', textAlign: 'center' }}>
            <img src={fcard} alt="card" className='Jimg' style={{ height: 250 }} />
            <div className='datosCard' style={{ textAlign: 'center' }}>
              <p style={{ position: 'absolute', marginLeft: 27, marginTop: 10, top: 0, left: 0, fontSize: 30, color: 'black' }}>{player.position}</p>
              <p style={{ position: 'absolute', marginLeft: 110, marginTop: 10, top: 0, left: 0, fontSize: 30, color: 'black' }}>{player.rating}</p>
              <p style={{ position: 'absolute', marginLeft: 35, marginTop: 110, top: 0, left: 0, fontSize: 40, color: 'red' }}>{player.attack}</p>
              <p style={{ position: 'absolute', marginLeft: 90, marginTop: 110, top: 0, left: 0, fontSize: 40, color: 'green' }}>{player.defense}</p>
            </div>
            <img src={images[player.id]}  style={{ position: 'absolute', marginLeft: 35, marginTop: 10, top: 0, left: 0, height: 100 }} alt="Imagen del jugador" />
          </div>
        </div>
        {showOptions && (
          <div>
            <button  className={`${!player.isActive ? "inactive" : ""}`}   disabled={!player.isActive} onClick={() => handleSelectPlayer(player, "attack")} style={{ position: "absolute", color: 'red', marginLeft: -10, marginTop: 68, top: 0, left: 0, fontSize: 40, background: 'transparent', border: 'none', fontFamily: "fantasy" }}>{player.attack}</button>
            <button  className={`${!player.isActive ? "inactive" : ""}`}   disabled={!player.isActive} onClick={() => handleSelectPlayer(player, "defense")} style={{ position: "absolute", color: 'green', marginLeft: 45, marginTop: 68, top: 0, left: 0, fontSize: 40, background: 'transparent', border: 'none', fontFamily: "fantasy" }}>{player.defense}</button>
          </div>
        )}
      </div>
    );
  };

  const PlayerList = () => {
    const [selectedPlayerAttack, setSelectedPlayerAttack] = useState(null);
    const [selectedPlayerDefense, setSelectedPlayerDefense] = useState(null);
    const [result, setResult] = useState("");
    const [selectedValue, setSelectedValue] = useState("");


    const handleSelectPlayer = (player, valueType) => {
      if (!player.isActive) {
        return;
      }
    
      if (valueType === "attack") {
        setSelectedPlayerAttack(player);
        setSelectedValue(`Ataque: ${player.attack}`);
      } else if (valueType === "defense") {
        setSelectedPlayerDefense(player);
        setSelectedValue(`Defensa: ${player.defense}`);
        player.isActive = false;
      }
      if (selectedPlayerAttack && selectedPlayerDefense) {
        comparisonResult();
        player.isActive = false;
      } else {
        setResult("");
        setSelectedValue("");
      }
    };
    
    
    const comparisonResult = () => {
      // Resto del código de la función
  
      let comparisonDetails = "";
  
      if (selectedPlayerAttack && selectedPlayerDefense) {
        let result = "";
        let updatedPlayerAttack = { ...selectedPlayerAttack };
        let updatedPlayerDefense = { ...selectedPlayerDefense };
  
        if (selectedPlayerAttack.attack > selectedPlayerDefense.defense) {
          result = `${selectedPlayerAttack.name} ha ganado`;
          updatedPlayerAttack.isActive = false;
          comparisonDetails = `${selectedPlayerAttack.name} (${selectedPlayerAttack.attack}) > ${selectedPlayerDefense.name} (${selectedPlayerDefense.defense})`;
        } else if (selectedPlayerAttack.attack < selectedPlayerDefense.defense) {
          result = `${selectedPlayerDefense.name} ha ganado`;
          updatedPlayerDefense.isActive = false;
          comparisonDetails = `${selectedPlayerAttack.name} (${selectedPlayerAttack.attack}) < ${selectedPlayerDefense.name} (${selectedPlayerDefense.defense})`;
        } else {
          result = "El ataque y la defensa son iguales";
          comparisonDetails = `${selectedPlayerAttack.name} (${selectedPlayerAttack.attack}) = ${selectedPlayerDefense.name} (${selectedPlayerDefense.defense})`;
        }
  
        setResult(result);
        setSelectedPlayerAttack(updatedPlayerAttack);
        setSelectedPlayerDefense(updatedPlayerDefense);
        setResultDetails(comparisonDetails);

      }
  
    };
  
    const [resultDetails, setResultDetails] = useState("");
  
    return (
      <div className="wrapper">
        <article>
          <h3 style={{ position: "absolute" }}>{result}</h3>
          <h3 style={{ position: "absolute", marginTop: '10vh' }}>{selectedValue}</h3>
          {result && <h3 style={{ position: "absolute" }}>{result}</h3>}
        {selectedValue && <h3 style={{ position: "absolute", marginTop: '10vh' }}>{selectedValue}</h3>}
        {resultDetails && <p style={{ position: "absolute", marginTop: '15vh' }}>Detalles: {resultDetails}</p>}

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
                <Player player={Jugadores[0]} handleSelectPlayer={handleSelectPlayer} />
              </div>
              <div className="j2">
                <Player player={Jugadores[1]} handleSelectPlayer={handleSelectPlayer} />
              </div>
              <div className="j3">
                <Player player={Jugadores[2]} handleSelectPlayer={handleSelectPlayer} />
              </div>
              <div className="j4">
                <Player player={Jugadores[3]} handleSelectPlayer={handleSelectPlayer} />
              </div>
            </div>
          </section>
        </article>
      </div>
    );
  };

  return <PlayerList />;
}

export default Play;

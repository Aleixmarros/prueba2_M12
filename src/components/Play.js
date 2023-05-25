import React, { useEffect, useState } from "react";
import "../App.css";
import "./Play.css";
import Jugadores from '../jugadoresPlay.json';
import Jmaquina from '../maquina.json';
import fcard from './imgJugadores/1.png';
import pepe from '../img/pepe.png';
import k1 from '../img/k1.png';


function Play() {

  const Player = ({ player, handleSelectPlayer }) => {
    const [images, setImages] = useState({});
    const [showOptions, setShowOptions] = useState(false);


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
      <div className={`${!player.isActive ? "inactive" : ""}`} key={player.id} onClick={() => handlePlayerClick()}>
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
            <button onClick={() => handleSelectPlayer(player, "attack")} style={{ position: "absolute", color: 'red', marginLeft: -10, marginTop: 68, top: 0, left: 0, fontSize: 40, background: 'transparent', border: 'none', fontFamily: "fantasy" }}>{player.attack}</button>
            <button onClick={() => handleSelectPlayer(player, "defense")} style={{ position: "absolute", color: 'green', marginLeft: 45, marginTop: 68, top: 0, left: 0, fontSize: 40, background: 'transparent', border: 'none', fontFamily: "fantasy" }}>{player.defense}</button>
            {/* <button onClick={comparePlayers}  style={{ marginLeft: 1, marginTop: 55, top: 0, left: 0, position: "absolute", background: 'transparent', border: 'none', fontSize: 18, fontFamily: "fantasy"}}>Comparar</button> */}

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
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [comparisonCount, setComparisonCount] = useState(0);
    const [jugadores, setJugadores] = useState(Jugadores);
    const [resultDetails, setResultDetails] = useState("");
    const [teamPrices, setTeamPrices] = useState({ equipo1: 0, equipo2: 0 });
    const [teamRatings, setTeamRatings] = useState({ equipo1: 0, equipo2: 0 });
    const [score, setScore] = useState(0);
    const [score2, setScore2] = useState(0);
    const handleSelectPlayer = (player, valueType) => {
      if (!player.isActive) {
        return;
      }

      if (valueType === "attack") {
        setSelectedPlayerAttack(player);
        setSelectedValue(`Ataque: ${player.attack}`);
        player.isActive = false;

      } else if (valueType === "defense") {
        setSelectedPlayerDefense(player);
        setSelectedValue(`Defensa: ${player.defense}`);
        player.isActive = false;
      }
      setSelectedPlayers((prevSelectedPlayers) => [...prevSelectedPlayers, player]);

      if (selectedPlayers.length === 2) {
        comparisonResult();
        setComparisonCount(comparisonCount + 1);

      } else {
        setResult("");
        setSelectedValue("");
      }
    };
    const MAX_COMPARISONS = 2; // Define la cantidad máxima de comparaciones
    const comparisonResult = () => {
      let comparisonDetails = "";

      if (selectedPlayers.length === MAX_COMPARISONS) {
        let result = "";
        let updatedPlayerAttack = { ...selectedPlayers[0] };
        let updatedPlayerDefense = { ...selectedPlayers[1] };

        if (updatedPlayerAttack.attack > updatedPlayerDefense.defense) {
          result = `${updatedPlayerAttack.name} ha ganado`;
          updatedPlayerAttack.isActive = false;
          comparisonDetails = `${updatedPlayerAttack.name} (${updatedPlayerAttack.attack}) > ${updatedPlayerDefense.name} (${updatedPlayerDefense.defense})`;
        } else if (updatedPlayerAttack.attack < updatedPlayerDefense.defense) {
          result = `${updatedPlayerDefense.name} ha ganado`;
          updatedPlayerDefense.isActive = false;
          comparisonDetails = `${updatedPlayerAttack.name} (${updatedPlayerAttack.attack}) < ${updatedPlayerDefense.name} (${updatedPlayerDefense.defense})`;
          setScore2(score2+ 1); // Incrementa el marcador en 1

        } else {
          result = "El ataque y la defensa son iguales";
          comparisonDetails = `${updatedPlayerAttack.name} (${updatedPlayerAttack.attack}) = ${updatedPlayerDefense.name} (${updatedPlayerDefense.defense})`;
        }

        if (updatedPlayerAttack.attack > updatedPlayerDefense.defense) {
          result = `${updatedPlayerAttack.name} ha ganado`;
          updatedPlayerAttack.isActive = false;
          comparisonDetails = `${updatedPlayerAttack.name} (${updatedPlayerAttack.attack}) > ${updatedPlayerDefense.name} (${updatedPlayerDefense.defense})`;
          setScore(score + 1); // Incrementa el marcador en 1
        }
        setResult(result);
        setJugadores((prevJugadores) => {
          const updatedJugadores = prevJugadores.map((jugador) => {
            if (jugador.id === updatedPlayerAttack.id || jugador.id === updatedPlayerDefense.id) {
              return jugador.isActive ? { ...jugador, isActive: false } : jugador;
            }
            return jugador;
          });
          return updatedJugadores;
        });

        setSelectedPlayers([]);
        setResultDetails(comparisonDetails);
      }
    };

    useEffect(() => {
      let totalEquipo1 = 0;
      let totalEquipo2 = 0;
      let sumRatingEquipo1 = 0;
      let sumRatingEquipo2 = 0;
      let countEquipo1 = 0;
      let countEquipo2 = 0;

      Jugadores.forEach((player) => {
        totalEquipo1 += player.price;
        sumRatingEquipo1 += player.rating;
        countEquipo1++;
      });

      Jmaquina.forEach((player) => {
        totalEquipo2 += player.price;
        sumRatingEquipo2 += player.rating;
        countEquipo2++;
      });
      const avgRatingEquipo1 = countEquipo1 > 0 ? sumRatingEquipo1 / countEquipo1 : 0;
      const avgRatingEquipo2 = countEquipo2 > 0 ? sumRatingEquipo2 / countEquipo2 : 0;
      setTeamPrices({ equipo1: totalEquipo1, equipo2: totalEquipo2 });
      setTeamRatings({ equipo1: avgRatingEquipo1, equipo2: avgRatingEquipo2 });
    }, []);


    return (
      <div className="wrapperPlay">
        <article>
          <div className="team-container">
            <div className="team1">
              <div className="team1-content">
                <h1>K1LLERS TEAM <img src={k1} style={{ width: "6vh" }} alt="k1" /></h1>
                <h4>Media de ratings K1LLERS TEAM: {teamRatings.equipo1.toFixed(2)}</h4>
                <h4>Precio total equipo K1LLERS TEAM: {typeof teamPrices.equipo1 === 'number' ? teamPrices.equipo1.toLocaleString() : teamPrices.equipo1}€</h4>
              </div>
            </div>
            <div className="team2">
              <div className="team2-content">
                <h1>PEPE FC <img src={pepe} style={{ width: "6vh" }} alt="pepe" /></h1>
                <h4>Media de ratings PEPE FC: {teamRatings.equipo2.toFixed(2)}</h4>
                <h4>Precio total equipo PEPE FC: {typeof teamPrices.equipo2 === 'number' ? teamPrices.equipo2.toLocaleString() : teamPrices.equipo2}€</h4>
              </div>
            </div>
          </div>
          <div className="valors">
          </div>
          <div style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <h1>Marcador: {score} - {score2}</h1>
            {resultDetails && <h4 className="rr" style={{ marginTop: '5vh', marginLeft: '5vh' }} >Enfrentamiento: {resultDetails}</h4>}
            <h1 className='comoPlay'>{result}</h1>
            <button className="btn btn-primary" style={{ marginTop: '5vh' }} onClick={comparisonResult}>Comparar</button>
          </div>



          <section className="ContainerPlay">
            <div className="futbolistas" style={{ position: 'fixed', marginBottom: '-90px', height: '50px', marginLeft: '35px', padding: 0 }}>

              <div className="j1" >
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
              <div className="j5">
                <Player player={Jugadores[4]} handleSelectPlayer={handleSelectPlayer} />

              </div>
              <div className="j6">
                <Player player={Jugadores[5]} handleSelectPlayer={handleSelectPlayer} />

              </div>
              <div className="j7">
                <Player player={Jugadores[6]} handleSelectPlayer={handleSelectPlayer} />

              </div>
              <div className="j8">
                <Player player={Jugadores[7]} handleSelectPlayer={handleSelectPlayer} />

              </div>
              <div className="j9">
                <Player player={Jugadores[8]} handleSelectPlayer={handleSelectPlayer} />

              </div>
              <div className="j10">
                <Player player={Jugadores[9]} handleSelectPlayer={handleSelectPlayer} />

              </div>
              <div className="j11">
                <Player player={Jugadores[10]} handleSelectPlayer={handleSelectPlayer} />

              </div>

              <div className="j21">
                <Player player={Jmaquina[2]} handleSelectPlayer={handleSelectPlayer} />

              </div>
              <div className="j22">
                <Player player={Jmaquina[9]} handleSelectPlayer={handleSelectPlayer} />

              </div>
              <div className="j23">
                <Player player={Jmaquina[7]} handleSelectPlayer={handleSelectPlayer} />

              </div>
              <div className="j24">
                <Player player={Jmaquina[8]} handleSelectPlayer={handleSelectPlayer} />

              </div>
              <div className="j25">
                <Player player={Jmaquina[3]} handleSelectPlayer={handleSelectPlayer} />

              </div>
              <div className="j26">
                <Player player={Jmaquina[4]} handleSelectPlayer={handleSelectPlayer} />

              </div>
              <div className="j27">
                <Player player={Jmaquina[10]} handleSelectPlayer={handleSelectPlayer} />

              </div>
              <div className="j28">
                <Player player={Jmaquina[0]} handleSelectPlayer={handleSelectPlayer} />

              </div>
              <div className="j29">
                <Player player={Jmaquina[1]} handleSelectPlayer={handleSelectPlayer} />

              </div>
              <div className="j210">
                <Player player={Jmaquina[5]} handleSelectPlayer={handleSelectPlayer} />

              </div>
              <div className="j211">
                <Player player={Jmaquina[6]} handleSelectPlayer={handleSelectPlayer} />

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
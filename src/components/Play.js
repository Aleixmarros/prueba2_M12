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
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [firstClickPlayer, setFirstClickPlayer] = useState(null);
    const [secondClickPlayer, setSecondClickPlayer] = useState(null);
  
    const handlePlayerClick = (player) => {
      setShowOptions(true);
      setSelectedPlayer(player);
      if (selectedPlayers.length < 2) {
        setSelectedPlayers([...selectedPlayers, player]);
      }
    };
    

    
    const comparePlayers = () => {
      if (selectedPlayers.length === 2) {
        const player1 = selectedPlayers[0];
        const player2 = selectedPlayers[1];
        const attackDiff = player1.attack - player2.defense;
        const defenseDiff = player1.defense - player2.attack;
        console.log(`Diferencia de ataque: ${attackDiff}`);
        console.log(`Diferencia de defensa: ${defenseDiff}`);
      } else {
        console.log('No se han seleccionado dos jugadores');
      }
    };
  
    // const handleSelectPlayer = (player) => {
    //   if (!firstClickPlayer) {
    //     setFirstClickPlayer(player);
    //     console.log('Primer jugador seleccionado');
    //   } else if (!secondClickPlayer) {
    //     setSecondClickPlayer(player);
    //     console.log('Segundo jugador seleccionado');
    //     comparePlayers(player);
    //   } else {
    //     console.log('Ya se han seleccionado dos jugadores');
    //   }
    // };
    // const comparePlayers = (player1, player2) => {
    //   if (player1 && player2) {
    //     const attackDiff = player1.attack - player2.defense;
    //     const defenseDiff = player1.defense - player2.attack;
    //     console.log(`Diferencia de ataque: ${attackDiff}`);
    //     console.log(`Diferencia de defensa: ${defenseDiff}`);
    //   } else {
    //     console.log('No se han seleccionado dos jugadores');
    //   }
    // };
    
    const handleSelectPlayerA = (player) => {
      if (!firstClickPlayer) {
        setFirstClickPlayer(player);
        console.log('Primer jugador seleccionado');
      } else if (!secondClickPlayer) {
        setSecondClickPlayer(player);
        console.log('Segundo jugador seleccionado');
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
      } else {
        console.log('Ya se han seleccionado dos jugadores');
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
            <button onClick={comparePlayers}>Comparar jugadores</button>

          </div>
        )}
      </div>
      
    );
  };
  
const PlayerList = (player) => {
    // Jugadores

    const playerIdToShow = 17226; // ID del jugador que quieres mostrar
    const playerToShow = Jugadores.find(player => player.id === playerIdToShow);
    const playerIdToShow2 = 4251; // ID del jugador que quieres mostrar
    const playerToShow2 = Jugadores.find(player => player.id === playerIdToShow2);
    const playerIdToShow3 = 7592; // ID del jugador que quieres mostrar
    const playerToShow3 = Jugadores.find(player => player.id === playerIdToShow3);
    const playerIdToShow4 = 17134; // ID del jugador que quieres mostrar
    const playerToShow4 = Jugadores.find(player => player.id === playerIdToShow4);
    const playerIdToShow5 = 7555; // ID del jugador que quieres mostrar
    const playerToShow5 = Jugadores.find(player => player.id === playerIdToShow5);
    const playerIdToShow6 = 16242; // ID del jugador que quieres mostrar
    const playerToShow6 = Jugadores.find(player => player.id === playerIdToShow6);
    const playerIdToShow7 = 17230; // ID del jugador que quieres mostrar
    const playerToShow7 = Jugadores.find(player => player.id === playerIdToShow7);
    const playerIdToShow8 = 17232; // ID del jugador que quieres mostrar
    const playerToShow8 = Jugadores.find(player => player.id === playerIdToShow8);
    const playerIdToShow9 = 4380; // ID del jugador que quieres mostrar
    const playerToShow9 = Jugadores.find(player => player.id === playerIdToShow9);
    const playerIdToShow10 = 10117; // ID del jugador que quieres mostrar
    const playerToShow10 = Jugadores.find(player => player.id === playerIdToShow10);
    const playerIdToShow11 = 3978; // ID del jugador que quieres mostrar
    const playerToShow11 = Jugadores.find(player => player.id === playerIdToShow11);

    // JMaquinas

    const playerIdToShow21 = 16485; // ID del jugador que quieres mostrar
    const playerToShow21 = Jmaquina.find(player => player.id === playerIdToShow21);
    const playerIdToShow22 = 3920; // ID del jugador que quieres mostrar
    const playerToShow22 = Jmaquina.find(player => player.id === playerIdToShow22);
    const playerIdToShow23 = 4048; // ID del jugador que quieres mostrar
    const playerToShow23 = Jmaquina.find(player => player.id === playerIdToShow23);
    const playerIdToShow24 = 17806; // ID del jugador que quieres mostrar
    const playerToShow24 = Jmaquina.find(player => player.id === playerIdToShow24);
    const playerIdToShow25 = 2740; // ID del jugador que quieres mostrar
    const playerToShow25 = Jmaquina.find(player => player.id === playerIdToShow25);
    const playerIdToShow26 = 4141; // ID del jugador que quieres mostrar
    const playerToShow26 = Jmaquina.find(player => player.id === playerIdToShow26);
    const playerIdToShow27 = 16540; // ID del jugador que quieres mostrar
    const playerToShow27 = Jmaquina.find(player => player.id === playerIdToShow27);
    const playerIdToShow28 = 2707; // ID del jugador que quieres mostrar
    const playerToShow28 = Jmaquina.find(player => player.id === playerIdToShow28);
    const playerIdToShow29 = 17223; // ID del jugador que quieres mostrar
    const playerToShow29 = Jmaquina.find(player => player.id === playerIdToShow29);
    const playerIdToShow210 = 4379; // ID del jugador que quieres mostrar
    const playerToShow210 = Jmaquina.find(player => player.id === playerIdToShow210);
    const playerIdToShow211 = 3918; // ID del jugador que quieres mostrar
    const playerToShow211 = Jmaquina.find(player => player.id === playerIdToShow211);

    const [selectedPlayerAttack, setSelectedPlayerAttack] = useState(0);
    const [selectedPlayerDefense, setSelectedPlayerDefense] = useState(0);
    // Nuevo estado para la defensa de Jmaquina
    const handleSelectPlayer = (player) => {
        setShowOptions(true);

    };

    const [showOptions, setShowOptions] = useState(false);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const [teamPrices, setTeamPrices] = useState({ equipo1: 0, equipo2: 0 });
    const [firstClickPlayer, setFirstClickPlayer] = useState(null);
    const [secondClickPlayer, setSecondClickPlayer] = useState(null);
  
    const handlePlayerClick = (player) => {
      if (selectedPlayers.length < 2) {
        setSelectedPlayers([...selectedPlayers, player]);
      }
    };
    

    
    const comparePlayers = () => {
      if (selectedPlayers.length === 2) {
        const player1 = selectedPlayers[0];
        const player2 = selectedPlayers[1];
        const attackDiff = player1.attack - player2.defense;
        const defenseDiff = player1.defense - player2.attack;
        console.log(`Diferencia de ataque: ${attackDiff}`);
        console.log(`Diferencia de defensa: ${defenseDiff}`);
      } else {
        console.log('No se han seleccionado dos jugadores');
      }
    };
    


    useEffect(() => {
        let totalEquipo1 = 0;
        let totalEquipo2 = 0;

        Jugadores.forEach((player) => {
            totalEquipo1 += player.price;
        });

        Jmaquina.forEach((player) => {
            totalEquipo2 += player.price;
        });

        setTeamPrices({ equipo1: totalEquipo1, equipo2: totalEquipo2 });
    }, []);

    const [teamRatings, setTeamRatings] = useState({ equipo1: 0, equipo2: 0 });

    useEffect(() => {
        let sumRatingEquipo1 = 0;
        let sumRatingEquipo2 = 0;
        let countEquipo1 = 0;
        let countEquipo2 = 0;
        Jugadores.forEach((player) => {
            sumRatingEquipo1 += player.rating;
            countEquipo1++;
        });
        Jmaquina.forEach((player) => {
            sumRatingEquipo2 += player.rating;
            countEquipo2++;
        });

        const avgRatingEquipo1 = countEquipo1 > 0 ? sumRatingEquipo1 / countEquipo1 : 0;
        const avgRatingEquipo2 = countEquipo2 > 0 ? sumRatingEquipo2 / countEquipo2 : 0;

        setTeamRatings({ equipo1: avgRatingEquipo1, equipo2: avgRatingEquipo2 });
    }, []);

    return (
        <div className="wrapper">
            <article>
                <div className="team-container">
                    <div className="team1">
                        <div className="team1-content">
                            <h1>K1LLERS TEAM <img src={k1} style={{ width: "10vh" }} alt="k1" /></h1>
                            <h4>Media de ratings K1LLERS TEAM: {teamRatings.equipo1.toFixed(2)}</h4>
                            <h4>Precio total equipo K1LLERS TEAM: {typeof teamPrices.equipo1 === 'number' ? teamPrices.equipo1.toLocaleString() : teamPrices.equipo1}€</h4>
                        </div>
                    </div>
                    <div className="team2">
                        <div className="team2-content">
                            <h1>PEPE FC <img src={pepe} style={{ width: "10vh" }} alt="pepe" /></h1>
                            <h4>Media de ratings PEPE FC: {teamRatings.equipo2.toFixed(2)}</h4>
                            <h4>Precio total equipo PEPE FC: {typeof teamPrices.equipo2 === 'number' ? teamPrices.equipo2.toLocaleString() : teamPrices.equipo2}€</h4>
                        </div>
                    </div>
                </div>
                <div className="valors">
                    <h4>Ataque del jugador seleccionado: {selectedPlayerAttack}<br></br>
                        Defensa del jugador seleccionado: {selectedPlayerDefense}</h4>
                        <button onClick={comparePlayers}>Comparar jugadores</button>

                </div>

                <section className="ContainerPlay">
                    <div className="futbolistas" style={{ position: 'fixed', marginBottom: '-90px', height: '50px' }}>
                        <div className="j1">
                            <Player player={playerToShow} onSelectPlayer={handlePlayerClick} />
            
                        </div>
                        <div className="j2">
                            <Player player={playerToShow2} onSelectPlayer={handlePlayerClick} />

                        </div>
                        <div className="j3">
                            <Player player={playerToShow3} onSelectPlayer={handleSelectPlayer} />

                        </div>
                        <div className="j4">
                            <Player player={playerToShow4} onSelectPlayer={handleSelectPlayer} />

                        </div>
                        <div className="j5">
                            <Player player={playerToShow5} onSelectPlayer={handleSelectPlayer} />

                        </div>
                        <div className="j6">
                            <Player player={playerToShow6} onSelectPlayer={handleSelectPlayer} />

                        </div>
                        <div className="j7">
                            <Player player={playerToShow7} onSelectPlayer={handleSelectPlayer} />

                        </div>
                        <div className="j8">
                            <Player player={playerToShow8} onSelectPlayer={handleSelectPlayer} />

                        </div>
                        <div className="j9">
                            <Player player={playerToShow9} onSelectPlayer={handleSelectPlayer} />

                        </div>
                        <div className="j10">
                            <Player player={playerToShow10} onSelectPlayer={handleSelectPlayer} />

                        </div>
                        <div className="j11">
                            <Player player={playerToShow11} onSelectPlayer={handleSelectPlayer} />

                        </div>

                        <div className="j21">
                            <Player player={playerToShow21} onSelectPlayer={handleSelectPlayer} />

                        </div>
                        <div className="j22">
                            <Player player={playerToShow22} onSelectPlayer={handleSelectPlayer} />

                        </div>
                        <div className="j23">
                            <Player player={playerToShow23} onSelectPlayer={handleSelectPlayer} />

                        </div>
                        <div className="j24">
                            <Player player={playerToShow24} onSelectPlayer={handleSelectPlayer} />

                        </div>
                        <div className="j25">
                            <Player player={playerToShow25} onSelectPlayer={handleSelectPlayer} />

                        </div>
                        <div className="j26">
                            <Player player={playerToShow26} onSelectPlayer={handleSelectPlayer} />

                        </div>
                        <div className="j27">
                            <Player player={playerToShow27} onSelectPlayer={handleSelectPlayer} />

                        </div>
                        <div className="j28">
                            <Player player={playerToShow28} onSelectPlayer={handleSelectPlayer} />

                        </div>
                        <div className="j29">
                            <Player player={playerToShow29} onSelectPlayer={handleSelectPlayer} />

                        </div>
                        <div className="j210">
                            <Player player={playerToShow210} onSelectPlayer={handleSelectPlayer} />

                        </div>
                        <div className="j211">
                            <Player player={playerToShow211} onSelectPlayer={handleSelectPlayer} />

                        </div>
                    </div>
                </section>
            </article>
        </div>
    );
};

export default PlayerList;
import React, { useState, useEffect } from "react";
import "../App.css";
import "./myTeams.css";
import "./Play.css";
import Team2 from "./MyTeam2";
import Jugadores from '../jugadoresPlay.json';
import Jimg from './ImgJ';
import fcard from './imgJugadores/1.png';
import Players from "./Players";
import benzema from "./imgJugadores/17226.png"
import { func } from "prop-types";



// const images = {};

// function importAll(r) {
//     r.keys().forEach((key) => (images[key] = r(key)));

// }

// importAll(require.context("./imgJugadores", false, /\.(png|jpe?g|svg)$/));
function T() {


    function Team() {

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
                <div key={player.id}>
                    <div className='players-container' key={player.id} style={{ margin: '-41px', padding: 0 }}>
                        <div className='JimgM' style={{ position: 'relative', textAlign: 'center', marginLeft: '-3vh' }}>
                            <img src={fcard} alt="card" className='Jimg' style={{ height: 325 }} />
                            <div className='datosCard' style={{ textAlign: 'center' }}>
                                <p style={{ position: 'absolute', marginLeft: 40, marginTop: 20, top: 0, left: 0, fontSize: 45, color: 'black' }}>{player.position}</p>
                                <p style={{ position: 'absolute', marginLeft: 140, marginTop: 20, top: 0, left: 0, fontSize: 45, color: 'black' }}>{player.rating}</p>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-320px' }}>
                                    <h4 style={{ color: 'black', textAlign: 'center', position: 'flex', marginLeft: -220, marginTop: 465, top: 0, left: 0, fontSize: 15 }}>{player.name}</h4>
                                </div>
                                <p style={{ position: 'absolute', marginLeft: 50, marginTop: 155, top: 0, left: 0, fontSize: 50, color: 'red' }}>{player.attack}</p>
                                <p style={{ position: 'absolute', marginLeft: 125, marginTop: 155, top: 0, left: 0, fontSize: 50, color: 'green' }}>{player.defense}</p>
                            </div>
                            <img src={images[player.id]} style={{ position: 'absolute', marginLeft: 65, marginTop: 40, top: 0, left: 0, height: 100 }} alt="Imagen del jugador" />
                        </div>
                    </div>

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


            return (
                <div className="wrapper" style={{ position: "absolute", marginTop: "60%" }}>
                    <article>

                        <section className="ContainerPlay2">
                            <div className="futbolistas" style={{ position: 'fixed', marginBottom: '-90px', height: '50px', marginLeft: '35px', padding: 0 }}>

                                <div className="j1j" >
                                    <Player player={playerToShow} />

                                </div>

                                <div className="j2j">
                                    <Player player={playerToShow2} />

                                </div>
                                <div className="j3j">
                                    <Player player={playerToShow3} />

                                </div>
                                <div className="j4j">
                                    <Player player={playerToShow4} />

                                </div>
                                <div className="j5j">
                                    <Player player={playerToShow5} />

                                </div>
                                <div className="j6j">
                                    <Player player={playerToShow6} />

                                </div>
                                <div className="j7j">
                                    <Player player={playerToShow7} />

                                </div>
                                <div className="j8j">
                                    <Player player={playerToShow8} />

                                </div>
                                <div className="j9j">
                                    <Player player={playerToShow9} />

                                </div>
                                <div className="j10j">
                                    <Player player={playerToShow10} />

                                </div>
                                <div className="j11j">
                                    <Player player={playerToShow11} />

                                </div>

                            </div>
                            <div className="bgb" style={{marginTop:'140vh'}}>
                            <MyTeam />
                            </div>
                        </section>
                    </article>
                </div>

            );
        };
        return (PlayerList());
    }


    const MyTeam = () => {

        const [images, setImages] = useState({});
        useEffect(() => {
            // Carga las imágenes de los jugadores
            Jugadores.forEach((player) => {
                import(`./imgJugadores/${player.id}.png`).then((image) => {
                    setImages((prevState) => ({
                        ...prevState,
                        [player.id]: image.default,
                    }));
                });
            });
        }, []);





        useEffect(() => {
            const jugadores = [...Jugadores];
            jugadores.sort((a, b) => b.rating - a.rating);
        }, []);


        // console.log(Jugadores);


        // function reset() {
        //     const nuevaPlantilla = plantilla.map((posicion) => {
        //         return { ...posicion, jugador: null, imagen: null };
        //     });
        //     setPlantilla(nuevaPlantilla);
        //     setFutbolistasRestantes(futbolistas);
        // }



        return (
            <article style={{ position: "absolute", marginBottom: "-140vh" , backgroundColor: 'black' }}>

                <div style={{ position: "sticky" }} >

                    <section style={{ position: "sticky", marginBottom: "-205vh" }} className="containerMyTeam" >

                        <div className="futbolistas" style={{ position: 'fixed', marginBottom: '300px', height: '5px', marginLeft: '10vh' }}>
                            <div className='JimgM'>
                                {Jugadores.sort((a, b) => b.rating - a.rating).map((player, index) => (
                                    <div className='players-container' key={player.id} style={{ margin: '-41px' }}>
                                        <div className='JimgM' style={{ position: 'relative', textAlign: 'center' }}>
                                            <img src={fcard} alt="card" className='Jimg' style={{ height: 250 }} />
                                            <div className='datosCard' style={{ textAlign: 'center', }}>
                                                <p style={{ position: 'absolute', marginLeft: 27, marginTop: 10, top: 0, left: 0, fontSize: 30, color: 'black' }}>{player.position}</p>
                                                <p style={{ position: 'absolute', marginLeft: 110, marginTop: 10, top: 0, left: 0, fontSize: 30, color: 'black' }}>{player.rating}</p>
                                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-320px', }}>
                                                    {/* Aquí puedes agregar cualquier otro contenido adicional */}
                                                </div>
                                                <p style={{ position: 'absolute', marginLeft: 35, marginTop: 110, top: 0, left: 0, fontSize: 40, color: 'red' }}>{player.attack}</p>
                                                <p style={{ position: 'absolute', marginLeft: 90, marginTop: 110, top: 0, left: 0, fontSize: 40, color: 'green' }}>{player.defense}</p>
                                            </div>
                                            <img src={images[player.id]} style={{ position: 'absolute', marginLeft: 35, marginTop: 10, top: 0, left: 0, height: 100 }} alt="Imagen del jugador" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </section>
                </div>
            </article>
        );
    };
    return (
        <>
            {Team()}
            {/* {MyTeam()} */}
        </>
    );
}

export default T;

import React, { useState, useEffect } from "react";
import "../App.css";
import "./myTeams.css";
import Jugadores from '../jugadoresPlay.json';
import Jimg from './ImgJ';
import fcard from './imgJugadores/1.png';
import Players from "./Players";
import benzema from "./imgJugadores/17226.png"



// const images = {};

// function importAll(r) {
//     r.keys().forEach((key) => (images[key] = r(key)));

// }

// importAll(require.context("./imgJugadores", false, /\.(png|jpe?g|svg)$/));

const futbolistas = [
    { id: "1", nombre: "Benzema", imagen: ["./17226.png"], uniqueId: "1" },
    { id: "11", nombre: "Gimenez", imagen: ["./2690.png"], uniqueId: "11" },
];

const huecos = [
    { id: "1", posicion: "EI", orden: 1, uniqueId: "1" },
    { id: "2", posicion: "DC", orden: 3, uniqueId: "2" },
    { id: "3", posicion: "ED", orden: 4, uniqueId: "3" },
    { id: "4", posicion: "MC", orden: 5, uniqueId: "4" },
    { id: "5", posicion: "MC", orden: 6, uniqueId: "5" },
    { id: "6", posicion: "MC ", orden: 7, uniqueId: "6" },
    { id: "7", posicion: "LI ", orden: 8, uniqueId: "7" },
    { id: "8", posicion: "DFC ", orden: 9, uniqueId: "8" },
    { id: "9", posicion: "DFC", orden: 10, uniqueId: "9" },
    { id: "10", posicion: "LD", orden: 11, uniqueId: "10" },
    { id: "11", posicion: "PT ", orden: 12, uniqueId: "11" },
];



const MyTeam = () => {
    const [plantilla, setPlantilla] = useState(huecos);
    const [futbolistasRestantes, setFutbolistasRestantes] = useState(futbolistas);
    const [personas, setPersonas] = useState([]);

    const [player, setPlayer] = useState({});
    const [jugadoresOrdenados, setJugadoresOrdenados] = useState([]);
    const [imageSrc, setImageSrc] = useState('17226');
    const [selectedPlayer, setSelectedPlayer] = useState(null);



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

    const handleDragStart = (event, playerId) => {
        event.dataTransfer.setData('text/plain', playerId);
        event.dataTransfer.setDragImage(event.target, 0, 0);
        setImages({ ...images, [playerId]: images[playerId] });
        setSelectedPlayer(playerId);
        event.dataTransfer.setData("text/plain", playerId);
    };

    const handleDragEnd = () => {
        // Limpia el estado del componente cuando el jugador se suelta
        setImages({});
        setSelectedPlayer(null);

    };

    useEffect(() => {
        const jugadores = [...Jugadores];
        setJugadoresOrdenados(jugadores);
        jugadores.sort((a, b) => b.rating - a.rating);
    }, []);

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event, posicion) => {
        event.preventDefault();
        const playerId = event.dataTransfer.getData("text");
        const jugadorArrastrado = futbolistas.find((player) => player.id === playerId);
        setPlantilla(
            plantilla.map((hueco) => {
                if (hueco.posicion === posicion) {
                    return { ...hueco, player: jugadorArrastrado };
                } else if (hueco.player && hueco.player.id === playerId) {
                    return { ...hueco, player: null };
                }
                return hueco;
            })
        );
        setFutbolistasRestantes(futbolistasRestantes.filter((player) => player.id !== playerId));
    };
    console.log(Jugadores);


    // function reset() {
    //     const nuevaPlantilla = plantilla.map((posicion) => {
    //         return { ...posicion, jugador: null, imagen: null };
    //     });
    //     setPlantilla(nuevaPlantilla);
    //     setFutbolistasRestantes(futbolistas);
    // }


    return (
        <div>
            <div
                className='DropTarget'
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <h2 className="titulo2">My Team</h2>
                <article className="articleM" onDragOver={(event) => event.preventDefault()}>
                    <section className="containerMyTeam">
                        <div className="plantilla">
                            <ul className="plantilla-list">
                                {plantilla.map((posicion) => (
                                    <li
                                        key={posicion.id}
                                        className={`plantilla-item ${posicion.posicion}`}
                                        onDragOver={handleDragOver}
                                        onDrop={(event) => handleDrop(event, posicion.orden - 1)}
                                    >
                                        <div className="plantilla-item__nombre">{posicion.posicion}</div>
                                        <div className="plantilla-item__jugador">
                                            <img src={fcard} key={posicion.id}
                                                className={`${posicion.posicion}`}
                                                style={{ height: '250px', zIndex: -20, marginLeft: '-60px', marginBottom: '-40px', marginRight: '-60px', marginTop: '-20px' }} />


                                            {/* {player ?  ( */}
                                            {posicion.jugador ? (
                                                <div className="futbolista">
                                                    <img className="futbolista__img" src={posicion.imagen} alt={posicion.jugador.nombre} />
                                                    <div className="futbolista__nombre">{posicion.jugador.nombre}</div>
                                                </div>
                                                // <img src={images[player.id]} />
                                            ) : (
                                                // <div className="placeholder">{posicion}</div>
                                                <div className="hueco imgJ" />

                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        <div className="futbolistas" style={{ position: 'fixed', marginBottom: '-90px', height: '50px' }}>
                            <div className='JimgM'>
                                {Jugadores.map((player, index) => (
                                    <div
                                        className='players-container'
                                        key={player.id}
                                        style={{ margin: '-41px' }}
                                    >
                                        <div
                                            className='JimgM'
                                            style={{ position: 'relative', textAlign: 'center' }}
                                        >
                                            <img
                                                src={fcard}
                                                alt="card"
                                                className='Jimg'
                                                style={{ height: 250 }}
                                                draggable={true}
                                                onDragStart={(event) => handleDragStart(event, player.id)}
                                                onDragEnd={handleDragEnd}
                                            />
                                            <div className='datosCard' style={{ textAlign: 'center' }}>
                                                <p style={{ position: 'absolute', marginLeft: 27, marginTop: 10, top: 0, left: 0, fontSize: 30, color: 'black' }}>{player.position}</p>
                                                <p style={{ position: 'absolute', marginLeft: 110, marginTop: 10, top: 0, left: 0, fontSize: 30, color: 'black' }}>{player.rating}</p>
                                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-320px' }}>
                                                    {/* Aquí puedes agregar cualquier otro contenido adicional */}
                                                </div>
                                                <p style={{ position: 'absolute', marginLeft: 35, marginTop: 110, top: 0, left: 0, fontSize: 40, color: 'red' }}>{player.attack}</p>
                                                <p style={{ position: 'absolute', marginLeft: 90, marginTop: 110, top: 0, left: 0, fontSize: 40, color: 'green' }}>{player.defense}</p>
                                            </div>
                                            <img
                                                src={images[player.id]}
                                                style={{ position: 'absolute', marginLeft: 35, marginTop: 10, top: 0, left: 0, height: 100 }}
                                                alt="Imagen del jugador"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </section>
                </article>
            </div>
        </div>
    );
};

export default MyTeam;

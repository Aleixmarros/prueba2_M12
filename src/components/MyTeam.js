import React, { useState, useEffect } from "react";
import "../App.css";
import "./myTeams.css";
import jugadoresLS_53 from '../JugadoresLS_53.json';
import Jimg from './ImgJ';
import fcard from './imgJugadores/1.png';
import Players from "./Players";



// const images = {};

// function importAll(r) {
//     r.keys().forEach((key) => (images[key] = r(key)));

// }

// importAll(require.context("./imgJugadores", false, /\.(png|jpe?g|svg)$/));

const futbolistas = [
    // { id: "1", nombre: "Oblak", imagen: images["./2680.png"], uniqueId: "1" },
    // { id: "2", nombre: "Carrascó", imagen: images["./2681.png"], uniqueId: "2" },
    // { id: "3", nombre: "Savíc", imagen: images["./2682.png"], uniqueId: "3" },
    // { id: "4", nombre: "M.Llorente", imagen: images["./2683.png"], uniqueId: "4" },
    // { id: "5", nombre: "De Paul", imagen: images["./2684.png"], uniqueId: "5" },
    // { id: "6", nombre: "Joao", imagen: images["./2685.png"], uniqueId: "6" },
    // { id: "7", nombre: "Correa", imagen: images["./2686.png"], uniqueId: "7" },
    // { id: "8", nombre: "Griezman", imagen: images["./2687.png"], uniqueId: "8" },
    // { id: "9", nombre: "Lemar", imagen: images["./2688.png"], uniqueId: "9" },
    // { id: "10", nombre: "Koke", imagen: images["./2689.png"], uniqueId: "10" },
    { id: "11", nombre: "Gimenez", imagen: ["./2690.png"], uniqueId: "11" },
];

const huecos = [
    { id: "1", posicion: "EI", orden: 1 },
    { id: "2", posicion: "DC", orden: 3 },
    { id: "3", posicion: "ED", orden: 4 },
    { id: "4", posicion: "MC", orden: 5 },
    { id: "5", posicion: "MC", orden: 6 },
    { id: "6", posicion: "MC ", orden: 7 },
    { id: "7", posicion: "LI ", orden: 8 },
    { id: "8", posicion: "DFC ", orden: 9 },
    { id: "9", posicion: "DFC", orden: 10 },
    { id: "10", posicion: "LD", orden: 11 },
    { id: "11", posicion: "PT ", orden: 12 },
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
        jugadoresLS_53.slice(0, 15).forEach((player) => {
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
        setImages({ ...images,[playerId]: images[playerId] });
        setSelectedPlayer(playerId);
    event.dataTransfer.setData("text/plain", playerId);
    };

    const handleDragEnd = () => {
        // Limpia el estado del componente cuando el jugador se suelta
        setImages({});
        setSelectedPlayer(null);

    };

    useEffect(() => {
        const jugadores = [...jugadoresLS_53];
        setJugadoresOrdenados(jugadores);
        jugadores.sort((a, b) => b.rating - a.rating);
    }, []);

    // Función para obtener los datos de la API
    const obtenerDatos = async () => {
        try {
            const response = await fetch('https://futdb.app/api/players/2680'); // URL de la API
            const data = await response.json(); // Obtener los datos en formato JSON

            // Transformación de los datos obtenidos
            const personasApi = data.map(persona => {
                return {
                    nombre: persona.name, // Cambiar 'name' a 'nombre'
                    apellido: persona.username, // Cambiar 'username' a 'apellido'
                    ...persona // Mantener las demás propiedades del objeto sin cambios
                }
            });

            setPersonas(personasApi); // Actualizar el estado con los datos transformados
        } catch (error) {
            console.error('Error al obtener datos de la API:', error);
        }
    }
    obtenerDatos(); // Llamada a la función obtenerDatos al cargar el componente


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

    // const handleDrop = (event, index) => {
    //     event.preventDefault();
    //     const indexArrastrado = event.dataTransfer.getData("index");
    //     const jugadorArrastrado = futbolistas[indexArrastrado];
    //     const nuevaPlantilla = plantilla.map((posicion) => {
    //         if (posicion.orden === index + 1) {
    //             return { ...posicion, jugador: jugadorArrastrado, imagen: jugadorArrastrado.imagen };
    //         } else {
    //             return posicion;
    //         }
    //     });
    //     setPlantilla(nuevaPlantilla);
    //     setFutbolistasRestantes(futbolistasRestantes.filter((futbolista) => futbolista.uniqueId !== jugadorArrastrado.uniqueId));
    // };

      


    function reset() {
        const nuevaPlantilla = plantilla.map((posicion) => {
            return { ...posicion, jugador: null, imagen: null };
        });
        setPlantilla(nuevaPlantilla);
        setFutbolistasRestantes(futbolistas);
    }

    return (
        <div>
            {/* <Jimg draggable /> */}
            <div
                className='DropTarget'
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <h2 className="titulo2">My Team</h2>
                <article onDragOver={(event) => event.preventDefault()}>
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
                                                onDragOver={handleDragOver}
                                                onDrop={(event) => handleDrop(event, posicion.orden - 1)} style={{ height: '250px', zIndex: -20, marginLeft: '-60px', marginBottom: '-40px', marginRight: '-60px', marginTop: '-20px' }} />

                                            {player ? (
                                                <img src={images[player.id]} />
                                            ) : (
                                                <div className="placeholder">{posicion}</div>
                                            )}
                                            {/* {posicion.jugador ? (
                                                <div className="futbolista">
                                                    <img className="futbolista__img" src={posicion.image} alt={posicion.jugador.name} />
                                                    <div className="futbolista__nombre">{posicion.jugador.nombre}</div>
                                                </div>
                                            ) : (
                                                <div className="hueco imgJ" onDragOver={(event) => handleDragOver(event)}
                                                    onDrop={(event) => handleDrop(event, posicion)} />
                                            )} */}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="futbolistas" style={{ position: 'fixed', marginBottom: '-90px', height: '50px' }} >
                            <div className='JimgM' >
                                {jugadoresLS_53.slice(0, 15).map((player) => (
                                    <div className='players-container' key={player.id} style={{ margin: '-41px' }}>
                                        <div className='JimgM' style={{ position: 'relative', textAlign: 'center' }}
                                             draggable={true}
                                             onDragStart={(event) => handleDragStart(event, player.id)}
                                             onDragEnd={handleDragEnd} >
                                            <img src={fcard} alt="card" className='Jimg' style={{ height: 250 }} />
                                            <div className='datosCard' style={{ textAlign: 'center' }}>
                                                <p style={{ position: 'absolute', marginLeft: 27, marginTop: 10, top: 0, left: 0, fontSize: 30, color: 'black' }}>{player.position}</p>
                                                <p style={{ position: 'absolute', marginLeft: 110, marginTop: 10, top: 0, left: 0, fontSize: 30, color: 'black' }}>{player.rating}</p>
                                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-320px' }}>
                                                    {/* <h4 style={{ color: 'black', position: 'absolute', marginLeft: 50, marginTop: 50, top: 0, left: 0, fontSize: 15 }}>{player.name}</h4> */}
                                                </div>
                                                <p style={{ position: 'absolute', marginLeft: 35, marginTop: 110, top: 0, left: 0, fontSize: 40, color: 'red' }}>{player.attack}</p>
                                                <p style={{ position: 'absolute', marginLeft: 90, marginTop: 110, top: 0, left: 0, fontSize: 40, color: 'green' }}>{player.defense}</p>
                                            </div>
                                            <img src={images[player.id]} style={{ position: 'absolute', marginLeft: 35, marginTop: 10, top: 0, left: 0, height: 100 }} alt="Imagen del jugador" onDragStart={(event) => handleDragStart(event, player.id)} draggable={true} onDragEnd={handleDragEnd}/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* {futbolistas.map((futbolista, index) => (
                            <div
                                key={futbolista.id}
                                className="futbolista"
                                draggable
                                onDragStart={(event) => handleDragStart(event, index)}
                            >
                                
                                <img className="futbolista__img imgJ" src={futbolista.imagen} alt={futbolista.nombre} />
                                <div className="futbolista__nombre">{futbolista.nombre}</div>
                            </div> */}
                            {/* ))} */}
                        </div>
                        {/* <button className="button" onClick={reset}><p>Reiniciar</p></button> */}
                    </section>
                </article>
            </div>
        </div>
    );
};

export default MyTeam;

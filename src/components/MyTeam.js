import React, { useState } from "react";
import "../App.css";
import "./myTeams.css";
import Jimg from './ImgJ';


const images = {};

function importAll(r) {
r.keys().forEach((key) => (images[key] = r(key)));

}

importAll(require.context("./imgJugadores", false, /\.(png|jpe?g|svg)$/));

const futbolistas = [
  { id: "1", nombre: "Oblak", imagen: images["./2680.png"], uniqueId: "1" },
  { id: "2", nombre: "Carrascó", imagen: images["./2681.png"], uniqueId: "2" },
  { id: "3", nombre: "Savíc", imagen: images["./2682.png"], uniqueId: "3" },
  { id: "4", nombre: "M.Llorente", imagen: images["./2683.png"], uniqueId: "4" },
  { id: "5", nombre: "De Paul", imagen: images["./2684.png"], uniqueId: "5" },
  { id: "6", nombre: "Joao", imagen: images["./2685.png"], uniqueId: "6" },
  { id: "7", nombre: "Correa", imagen: images["./2686.png"], uniqueId: "7" },
  { id: "8", nombre: "Griezman", imagen: images["./2687.png"], uniqueId: "8" },
  { id: "9", nombre: "Lemar", imagen: images["./2688.png"], uniqueId: "9" },
  { id: "10", nombre: "Koke", imagen: images["./2689.png"], uniqueId: "10" },
  { id: "11", nombre: "Gimenez", imagen: images["./2690.png"], uniqueId: "11" },
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
    const handleDragStart = (event, index) => {
        event.dataTransfer.setData("index", index);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event, index) => {
        event.preventDefault();
        const indexArrastrado = event.dataTransfer.getData("index");
        const jugadorArrastrado = futbolistas[indexArrastrado];
        const nuevaPlantilla = plantilla.map((posicion) => {
            if (posicion.orden === index + 1) {
                return { ...posicion, jugador: jugadorArrastrado, imagen: jugadorArrastrado.imagen };
            } else {
                return posicion;
            }
        });
        setPlantilla(nuevaPlantilla);
        setFutbolistasRestantes(futbolistasRestantes.filter((futbolista) => futbolista.uniqueId !== jugadorArrastrado.uniqueId));
    };
    
    
    
    function reset() {
        const nuevaPlantilla = plantilla.map((posicion) => {
            return { ...posicion, jugador: null, imagen: null };
        });
        setPlantilla(nuevaPlantilla);
        setFutbolistasRestantes(futbolistas);
    }
    
    return (
        <div>
             <div
      className='DropTarget'
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
            <Jimg draggable />
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
                                        
                                        {posicion.jugador ? (
                                            <div className="futbolista">
                                                <img className="futbolista__img" src={posicion.imagen} alt={posicion.jugador.nombre} />
                                                <div className="futbolista__nombre">{posicion.jugador.nombre}</div>
                                            </div>
                                        ) : (
                                            <div className="hueco imgJ" />
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="futbolistas">
                        {futbolistas.map((futbolista, index) => (
                            <div
                                key={futbolista.id}
                                className="futbolista"
                                draggable
                                onDragStart={(event) => handleDragStart(event, index)}
                            >
                                
                                <img className="futbolista__img imgJ" src={futbolista.imagen} alt={futbolista.nombre} />
                                <div className="futbolista__nombre">{futbolista.nombre}</div>
                            </div>
                        ))}
                    </div>
                    <button className="button" onClick={reset}><p>Reiniciar</p></button>
                </section>
            </article>
        </div>
        </div>
    );
};

export default MyTeam;

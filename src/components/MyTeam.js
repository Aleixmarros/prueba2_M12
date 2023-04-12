import React, { useState } from "react";
import "../App.css";
import "./myTeams.css";
import oblak from "./imgJugadores/2680.png";
import Carrasco from "./imgJugadores/2681.png";
import Savíc from "./imgJugadores/2682.png";


const futbolistas = [
  { id: "1", nombre: "Oblak", imagen: oblak },
  { id: "2", nombre: "Carrascó", imagen: Carrasco },
  { id: "3", nombre: "Savíc", imagen: Savíc},
  { id: "4", nombre: "Oblak2", imagen: oblak },
  { id: "5", nombre: "Carrascó2", imagen: Carrasco },
  { id: "6", nombre: "Savíc2", imagen: Savíc},
  // y así sucesivamente
];


const huecos = [
  { id: "1", posicion: "Portero", orden: 1 },
  { id: "2", posicion: "Defensa 1", orden: 2 },
  { id: "3", posicion: "Defensa 2", orden: 3 },
  { id: "4", posicion: "Defensa 3", orden: 4 },
  { id: "5", posicion: "Defensa 4", orden: 5 },
  { id: "6", posicion: "Mediocampista 1", orden: 6 },
  { id: "7", posicion: "Mediocampista 2", orden: 7 },
  { id: "8", posicion: "Mediocampista 3", orden: 8 },
  { id: "9", posicion: "Delantero 1", orden: 9 },
  { id: "10", posicion: "Delantero 2", orden: 10 },
  { id: "11", posicion: "Delantero 3", orden: 11 },
];


const MyTeam = () => {
  const [plantilla, setPlantilla] = useState(huecos);

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData("index", index);
  };
  const actualizarPlantilla = (nuevaPlantilla) => {
    setPlantilla(nuevaPlantilla);
  };
  
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const [indexArrastrado, setIndexArrastrado] = useState(null);

  const handleDrop = (event, index) => {
    event.preventDefault();
    const jugadorArrastrado = futbolistas[indexArrastrado];
    const nuevaPlantilla = plantilla.map((posicion) => {
      if (posicion.orden === index + 1) {
        return { ...posicion, jugador: jugadorArrastrado };
      } else {
        return posicion;
      }
    });
    setPlantilla(nuevaPlantilla);
  };
  
  
  
  

return (
    <div>
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
                  <div className="plantilla-item__nombre imgJ">{posicion.posicion}</div>
                  <div className="plantilla-item__jugador">
                    {posicion.jugador ? (
                      <div className="futbolista">
                        <img className="futbolista__img" src={posicion.jugador.imagen} alt={posicion.jugador.nombre} />
                        <div className="futbolista__nombre">{posicion.jugador.nombre}</div>
                      </div>
                    ) : (
                      <div className="hueco" />
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
        </section>
      </article>
    </div>
  );
};

export default MyTeam;
import React, { useState } from "react";
import "../App.css";
import "./myTeams.css";

const futbolistas = [
    { id: "1", nombre: "Futbolista 1", imagen: "./imgJugadores/2680.png" },
    { id: "2", nombre: "Futbolista 2", imagen: "./imgJugadores/2681.png" },
    { id: "3", nombre: "Futbolista 3", imagen: "./imgJugadores/2683.png" },
    // y así sucesivamente
];

const huecos = [
    { id: "1", posicion: "Delantero" },
    { id: "2", posicion: "Mediocampista" },
    { id: "3", posicion: "Defensa" },
    { id: "4", posicion: "Portero" },
    // y así sucesivamente hasta 11
];

const MyTeam = () => {
    const [plantilla, setPlantilla] = useState(huecos);

    const handleDragStart = (event, index) => {
        event.dataTransfer.setData("index", index);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event, index) => {
        const droppedIndex = event.dataTransfer.getData("index");
        const newPlantilla = [...plantilla];
        const draggedItem = newPlantilla[droppedIndex];
        newPlantilla.splice(droppedIndex, 1);
        newPlantilla.splice(index, 0, draggedItem);
        setPlantilla(newPlantilla);
    };

    return (
        <div>
            <h2 className="titulo2">My Team</h2>
            <article>
                <section className="containerMyTeam">
                    <div className="futbolistas">
                        {futbolistas.map((futbolista, index) => (
                            <div
                                key={futbolista.id}
                                className="futbolista"
                                draggable
                                onDragStart={(event) => handleDragStart(event, index)}
                            >
                                <img src={futbolista.imagen} alt={futbolista.nombre} />
                            </div>
                        ))}
                    </div>
                    <div className="plantilla">
                        <ul>
                            {plantilla.map((posicion, index) => (
                                <li
                                    key={posicion.id}
                                    className="posicion"
                                    onDragOver={handleDragOver}
                                    onDrop={(event) => handleDrop(event, index)}
                                >
                                    {posicion.posicion}
                                    {index < futbolistas.length ? (
                                        <div className="futbolista-en-posicion">
                                            <img
                                                src={futbolistas[index].imagen}
                                                alt={futbolistas[index].nombre}
                                            />
                                        </div>
                                    ) : (
                                        <div className="hueco" />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </article>
        </div>
    );
};

export default MyTeam;
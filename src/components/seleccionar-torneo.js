import React, { Component } from 'react'
import './login.css'

export default class STorneo extends Component {
  render() {
    const titulo = "FutMan";
    return (
        <section>
            <h2 className="hovertown titulo">{titulo}</h2>
            <h2 className="text-warning">Bienvenido!</h2>
            <div className="botones">
          <a href="/seleccionar-torneo"/>
            <button className="btn btn-primary">Seleccionar Torneo</button>
          <a href="/crear-torneo"/>
            <button className="btn btn-secondary">Crear Torneo</button>
        </div>
        </section>
    );

    
  };
};
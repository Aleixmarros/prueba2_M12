import React, { Component } from 'react'
import './login.css'
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    const titulo = "FutMan";
      return (
          <section>
              <h2 className="hovertown titulo">{titulo}</h2>
              <h2 className="text-warning">Bienvenido!</h2>
            <a href="./play">Play</a>
              <button className="btn btn-primary">Seleccionar Torneo</button>
            <a href="/crear-torneo"></a>
              <button className="btn btn-secondary">Crear Torneo</button>
          </section>
      );
  
      
    };
  };

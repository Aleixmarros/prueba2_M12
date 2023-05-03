import React, { Component } from 'react'
import './about-us.css';
import fut1 from './asssets/fut2.jpg';
import fut2 from './asssets/fut3.jpg';

export default class AboutUs extends Component {
  render() {
    return (
      <div className="about-us-container">
      <h1>About Us</h1>
      <p>Somos unos estudiantes del Grado Superior de Desarrollo de Aplicaciones Web y estamos presentando nuestra idea en formato web para el trabajo final de curso.</p>
      <p>Nuestra misión es hacer una págian web en la cual puedas formar tu propio equipo de futbol para ganar y ser el mejor</p>
      <p>Desde el inicio del proyecto, hemos trabajado para mejorar lo máximo posible la visión e idea de nuestro proyecto.</p>
      <img id='about-us-image' src={fut1}/> <img id='about-us-image' src={fut2}/><br></br>
      <p>Nuestro equipo está compuesto por expertos en el desarrollo de aplicaciones web.<br></br> Trabajamos con pasión y compromiso para ofrecer un proyecto de calidad.</p>
      <marquee>CREADORES: MARC CLAPÉS, ALEIX MARTÍN, JOAN ANGEL DÍAZ Y SERGI PÉREZ</marquee>
      </div> 
    )
  }
}

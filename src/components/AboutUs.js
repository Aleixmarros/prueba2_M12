import React, { Component } from 'react'
import './about-us.css';
import fut1 from './asssets/fut2.jpg';
import fut2 from './asssets/fut3.jpg';
import fotomarc from '../img/fotomarc.jpg';
import fotoaleix from '../img/fotoaleix.jpg'
import fotojoan from '../img/Joan_diaz.jpg';
import fotozeji from '../img/sergi_pérez.jpg'
import { Row, Col } from 'react-bootstrap';


export default class AboutUs extends Component {
  render() {
    return (
      <div className="form2">
                <h2 className="titulo2" style={{fontSize:"70px", marginBottom: "5vh"}}>About Us</h2>
        <p style={{ fontSize: '25px' }}>Somos unos estudiantes del Grado Superior de Desarrollo de Aplicaciones Web y estamos presentando nuestra idea en formato web para el trabajo final de curso.</p><br></br>
        <p style={{ fontSize: '25px' }}>Desde el inicio del proyecto, hemos trabajado para mejorar lo máximo posible la visión e idea de nuestro proyecto.</p><br></br>
        <p style={{ fontSize: '25px' }}>Nuestro equipo está compuesto por expertos en el desarrollo de aplicaciones web.<br></br> Trabajamos con pasión y compromiso para ofrecer un proyecto de calidad.</p>
        <Row className='center-row'>
          <Col md={10} sm={4} xs={4}>
            <Row>
              <Col md={3} sm={3} xs={3}>
                <div><img className='fotos2' src={fotoaleix} /><h3>Aleix Martín</h3></div>
              </Col>
              <Col md={3} sm={3} xs={3}>
                <div><img className='fotos2' src={fotomarc} /><h3>Marc Clapés</h3></div>
              </Col>
              <Col md={3} sm={3} xs={3}>
                <div><img className='fotos2' src={fotojoan} /><h3>Joan Díaz</h3></div>
              </Col>
              <Col md={3} sm={3} xs={3}>
                <div><img className='fotos2' src={fotozeji} /><h3>Sergi Pérez</h3></div>
              </Col>
            </Row>
          </Col>
        </Row>


        {/* <marquee>CREADORES: MARC CLAPÉS, ALEIX MARTÍN, JOAN ANGEL DÍAZ Y SERGI PÉREZ</marquee> */}
      </div>
    )
  }
}

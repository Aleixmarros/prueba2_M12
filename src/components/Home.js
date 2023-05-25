import React, { Component } from 'react'
import './login.css';
import '../App.css';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import myTeam from '../img/MyTeam.png';
import players from '../img/Players.png';
import classificacion from '../img/classificacion.png';
import video from './video/Valorant2022.03.18-ACEJett.mp4';


export default class Home extends Component {
  render() {
    const titulo = 'FutMan';
    const SimpleSlider = () => {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000 // cambia la imagen cada 2 segundos
      };

      return (
        <Slider {...settings}>
          <div>
            <h1>¡Demuestra lo que sabes de fútbol!</h1>
            <h4>Crea el mejor equipo para llegar a lo mas alto</h4>
            <img src={myTeam} alt='imagen plantilla MyTeam' style={{ maxWidth: "68vh", display: 'block', margin: '0 auto', marginTop: '5vh', borderRadius: '15px' }} />
            {/* <button className="btn btn-primary" style={{ margin: '1vh auto', borderRadius: '5px', display: 'block' }}>Seleccionar Torneo</button> */}
            {/* <button className="btn btn-secondary" style={{ margin: '1vh auto', borderRadius: '5px', display: 'block' }}>Crear Torneo</button> */}
          </div>
          <div>
            <h1>Gestiona, ficha y gana</h1>
            <h4>Gestiona tu plantilla. Ficha astutamente para crear la mejor plantilla y gana a tus amigos.</h4>
            <img src={players} alt='imagen fichar a jugadores Players' style={{ maxWidth: "72vh", display: 'block', margin: '0 auto', maxHeight: '55vh', borderRadius: '15px' }} />

          </div>
          <div>
            <h1>Crea tu propio Torneo o unete al de tus amigos</h1>
            <h4>Crea o unete a un torneo con tus amigos, compañeros o familiares por ver quien sabe mas de futbol.</h4>
            <img src={classificacion} alt='imagen Classificacion' style={{ maxWidth: "68vh", display: 'block', margin: '0 auto', maxHeight: '55vh', borderRadius: '15px' }} />

          </div>
          <div>
            <h1  style={{marginTop:'5vh', fontSize:'8vh'}}>Aprende a Jugar</h1>
            <h4  style={{marginTop:'1vh', fontSize:'3vh'}}>Mira el mini tutorial, para aprender a jugar!</h4>
            <button className="btn btn-primary" style={{marginTop:'5vh', fontSize:'5vh'}} onClick={() => { const videoSection = document.getElementById('videoC');
             videoSection.scrollIntoView({ behavior: 'smooth' });}}>Como se Juega</button>


          </div>

        </Slider>
      );
    };

    return (
      <section className='sectionHome'>
        <h2 className="text-warning">Bienvenido A</h2>
        <h2 className="hovertown titulo">{titulo}</h2>
        <div >
          <SimpleSlider />
          
        </div>
        <h1 id='videoC' className='comoPlay'>COMO SE JUEGA:</h1>
        <video className='videoplayer' controls width="50%">
            <source src={video} type="video/mp4" />
            Tu navegador no admite la reproducción de videos.
          </video>
      </section>
    );
  }
}

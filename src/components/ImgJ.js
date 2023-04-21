import React,  { useState, useEffect }from "react";
import fcard from './imgJugadores/1.png';
import jugadoresLS_53 from '../JugadoresLS_53.json';



const ImgJ = ({enviarImgJ}) => {
    const [player, setPlayer] = useState({});
    // const [playerId, setPlayerId] = useState(2706);
    const [imageSrc, setImageSrc] = useState('');
    const [searchValue, setSearchValue] = useState('');


    useEffect(() => {
      const jugadoresFiltrados = jugadoresLS_53.filter((jugador) =>
        jugador.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      // setJugadoresOrdenados(jugadoresFiltrados);
    }, [searchValue]);
  

    useEffect(() => {
        // Importa la imagen usando la ruta relativa
        import(`./imgJugadores/${player.id}.png`).then((image) => setImageSrc(image.default));
      }, [player.id]);
      

      return(
        <div className='Jimg' style={{ position: 'relative' }}>
        <img src={fcard} alt="card" style={{ height: 750}} />
        {/* <img src={imageSrc} style={{ position: 'absolute', marginLeft: 75,  marginTop: 100, top: 0 , left: 0,  height: 350 }} alt="Imagen del jugador" /> */}
      </div>

      );

}
export default ImgJ;
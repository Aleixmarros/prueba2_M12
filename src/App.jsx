import './App.css';
import React from "react";
import Players from "./Players";
import Header from './Header';
// import NavBar from './Header';

// import background from "./img/fondo_champions.png";



const App = () => {
  
  const titulo = "FutMan";
  // const colores = {
  //     primary: "text-primary",
  //     info: "text-info",
  //     danger: "text-danger",
  // };

  // Condicional
  const user = true;

  const SaludoBienvenida = () => <h2 className="text-warning">Bienvenido!</h2>;
  
  const SaludoDespedida = () => (
      <h2 className="text-secondary">Usuario offline</h2>
  );

  // Listas y Keys
//   const frutas = ["🍉", "🍌", "🍓"];
//   <button className="btn btn-primary" onClick={() => console.log("Play!")}>
//     Play!
// </button>

// Titulo



  return  (
    // <body  style={{ backgroundImage: `url(${background})` }}>
    <section>
      <Header />
      {/* <NavBar /> */}
      <div className="container">
           {/* <h1 className={colores.primary}>{titulo}</h1>  */}
          <h2 className="hovertown titulo">{titulo}</h2>
          {user ? <SaludoBienvenida /> : <SaludoDespedida />}
          {/* <ul>
          {frutas.map((fruta, i) => (
              <li key={fruta}>
                  {i + 1} - {fruta}
              </li>
          ))}
      </ul> */}
      <Players />;
      </div>
      {/* </section></body> */}
      </section>
  );
};


export default App;


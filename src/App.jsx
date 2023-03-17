import './App.css';
import React from "react";
import Home from './components/Home';
import Play from './components/Play';
import Classification from './components/Classification';
import Players from './components/Players';
import Teams from './components/Teams';
import Profile from './components/Profile';
import AboutUs from './components/AboutUs';
import Login from './components/login.component';
import SignUp from './components/signup.component';
import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// import NavBar from './Header';

// import background from "./img/fondo_champions.png";



const App = () => {

  // const titulo = "FutMan";
  // const colores = {
  //     primary: "text-primary",
  //     info: "text-info",
  //     danger: "text-danger",
  // };

  // Condicional
  // const user = true;

  // const SaludoBienvenida = () => <h2 className="text-warning">Bienvenido!</h2>;

  // const SaludoDespedida = () => (
  //   <h2 className="text-secondary">Usuario offline</h2>
  // );

  // Listas y Keys
  //   const frutas = ["🍉", "🍌", "🍓"];
  //   <button className="btn btn-primary" onClick={() => console.log("Play!")}>
  //     Play!
  // </button>

  // Titulo



  return (
    <div>
      <Header />
    <Router>
        <div className='h'>
        <Link className="nav-link " to={'/Home'}>
          {/* Home */}
        </Link>
          <Link className="nav-link" to={'/Play'}>
            {/* Play */}
          </Link>
            <Link className="nav-link" to={'/Classification'}>
              {/* Classification */}
            </Link>
              <Link className="nav-link" to={'/Players'}>
                {/* Players */}
              </Link>
                <Link className="nav-link" to={'/Teams'}>
                  {/* Teams */}
                </Link>
                  <Link className="nav-link" to={'/Login'}>
                    {/* Login */}
                  </Link>
                    <Link className="nav-link" to={'/sign-up'}>
                      {/* Sign up */}
                    </Link>
                      <Link className="nav-link" to={'/AboutUs'}>
                        {/* About Us */}
                      </Link>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Play" element={<Play />} />
          <Route path="/Classification" element={<Classification />} />
          <Route path="/Players" element={<Players />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/AboutUS" element={<AboutUs />} />
          
        </Routes>
        </div>

    </Router>
    </div>

  );
};


export default App;


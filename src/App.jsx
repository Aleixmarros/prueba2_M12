import './App.css';
import React from "react";
import Home from './components/Home';
import Play from './components/Play';
import Classification from './components/Classification';
import Players from './components/Players';
import Teams from './components/Teams';
import Profile from './components/Profile';
import Profile2 from './components/Profile-password';
import AboutUs from './components/AboutUs';
import Login from './components/login.component';
import SignUp from './components/signup.component';
import Header from './components/Header';
import Header2 from './components/Header2';
import MyTeam from './components/MyTeam';
import MyTeam2 from './components/MyTeam2';

import selT from './components/seleccionar-torneo';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header2 />
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
                <Link className="nav-link" to={'/MyTeam'}>
                  {/* MyTeam */}
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
          <Route path="/MyTeam" element={<MyTeam />} />
          <Route path="/MyTeam2" element={<MyTeam2 />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Profile2" element={<Profile2 />} />          
          <Route path="/Login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/AboutUS" element={<AboutUs />} />
          <Route path="/seleccionar-torneo" element={<selT />} />
          
        </Routes>
        </div>

    </Router>
    </div>

  );
};


export default App;


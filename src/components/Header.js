// import React, { Component } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './Home';
// import Play from './Play';
// import Classification from './Classification';
// import Players from './Players';
// import Teams from './Teams';
// import Profile from './Profile';
// import AboutUs from './AboutUs';
// import Login from './login.component';
// import SignUp from './signup.component';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

// export default class Header extends Component {
//   render() {
//     return (

//         <Router>
//         <Header />
//         <Link className="nav-link" to={'/Home'}>
//           Home
//         </Link>
//         <Link className="nav-link" to={'/Play'}>
//           Play
//         </Link>
//         <Link className="nav-link" to={'/Classification'}>
//           Classification
//         </Link>
//         <Link className="nav-link" to={'/Players'}>
//           Players
//         </Link>
//         <Link className="nav-link" to={'/Teams'}>
//           Teams
//         </Link>
//         <Link className="nav-link" to={'/Login'}>
//           Login
//         </Link>
//         <Link className="nav-link" to={'/sign-up'}>
//           Sign up
//         </Link>
//         <Link className="nav-link" to={'/AboutUs'}>
//           About Us
//         </Link>
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/Home" element={<Home />} />
//           <Route path="/Play" element={<Play />} />
//           <Route path="/Classification" element={<Classification />} />
//           <Route path="/Players" element={<Players />} />
//           <Route path="/Teams" element={<Teams />} />
//           <Route path="/Profile" element={<Profile />} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/sign-up" element={<SignUp />} />
//           <Route path="/AboutUS" element={<AboutUs />} />

//         </Routes>


//     </Router>
//     )
//   }
// }
import './login.css'
export default function Header() {
    return (
        <nav className="navigation">
            <h2 className="hovertown titulo">
                FutMan
            </h2>
            <button className="hamburger">
                {/* icon from heroicons.com */}
                <svg
                    
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                className="navigation-menu">
                <ul>
                    <li>
                        <a href="/Home">Home</a>
                    </li>
                    <li>
                        <a href="/Play">Play</a>
                    </li>
                    <li>
                        <a href="/Classification">Classification</a>
                    </li>
                    <li>
                        <a href="/Players">Players</a>
                    </li>
                    <li>
                        <a href="/Teams">Teams</a>
                    </li>
                    <li>
                        <a href="/MyTeam">My Team</a>
                    </li>
                    <li>
                        <a href="/Profile">Profile</a>
                    </li>
                    <li>
                        <a href="/AboutUs">About Us</a>
                    </li>
                    <li>
                        <a href="/sign-up">Sign Up</a>
                    </li>
                    <li>
                        <a href="/Login">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
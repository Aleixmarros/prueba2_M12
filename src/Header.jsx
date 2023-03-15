import React, {Component} from 'react';
import logo from './img/logo.png';
import './App.css';
// import Router from './Router';
// import { Link } from 'react-router-dom';

// const NavBar= () => {
//   return (
//     <nav className="navbar navbar-dark bg-dark">
//         <div className="container">
//             <Link className="btn btn-outline-primary" to="/">
//                 Home
//             </Link>
//             <Link className="btn btn-outline-primary" to="/Play">
//                 Play
//             </Link>
//             <Link className="btn btn-outline-primary" to="/Classification">
//                 Classification
//             </Link>
//         </div>
//     </nav>
// );
// };
//<ul>
    //<li><Link to="/">Home</Link></li>
    //<li><Link to="/Play">Play</Link></li>
    //<li><Link to="/ajksdfkjhasdk">Error en la url</Link></li>
//</ul>;
export default class Header extends Component {

  render() {
    return(
      <>
      
      <p> <img alt="logo" className='logo' height="50px" src={logo} />Home    Play    Classification    Players    Teams    Profile    About Us</p>
      </>

    )
  }

}
// export default NavBar;
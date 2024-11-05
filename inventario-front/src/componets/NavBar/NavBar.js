import './../NavBar/NavBar.css'
import React from 'react';
import { PiUserBold } from "react-icons/pi";
import logo from './../../recursos/assembled.png'; // Importa el logo

const NavBar = () => {

    const handleLogout = () => {
        window.localStorage.removeItem('loggedinventario');
        alert("Sesión cerrada");
        window.location.reload();
    };
  
    return (
      <nav className="navbar navbar-expand-lg">
           <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" className="logo" /> {/* Añade el logo */}
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={handleLogout}><PiUserBold  className="logout-icon" />Cerrar Sesión </button>
              </li>
            </ul>
          </div>

      </nav>
    );
  };
  
  export default NavBar;

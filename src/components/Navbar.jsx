import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar'>
      
      <ul>
        <li>
          <Link to="/inicio">Inicio</Link>
        </li>
        <li>
          <Link to="/buscar">Buscar</Link>
        </li>
        <li>
          <Link to="/donaciones">Donaciones</Link>
        </li>
        <li>
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li>
          <Link to="/perfil">Perfil</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
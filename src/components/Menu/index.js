import React from 'react';
import './index.css'

import logo from '../../assets/images/logo.png';
import Button from '../Button';
// import ButtonLink from '../ButtonLink';

function Menu() {
  return ( 
    <nav className="Menu">
        <a href="/">
            <img className="Logo" src={logo} alt="SquirrelFlix"/>
        </a>

        <Button as="a" className="ButtonLink" href="/">
            Novo vídeo
        </Button>
    </nav>
  );
}

export default Menu;

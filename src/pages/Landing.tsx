import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../images/logo.png';

import '../styles/pages/landing.css'

function Landing() {
  return (
    <div id="landing-page-content">
      <header className="page-header">
        <img src={Logo} alt="Logo"/>
        <h1>Instituto de Estudos Oncológicos</h1>
      </header>
      <main>
        <img src="" alt="Ilustration"/>
        <h2>Análise sobre o cancêr infântil</h2>
        <p>Mapa com os dados e informações</p>
        <Link to='/dashboard' className="enter-button">
          Acessar
        </Link>
      </main>
    </div>
  );
}

export default Landing;
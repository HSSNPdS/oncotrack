import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../images/logo.png';
import Ilustration from '../images/young_boy_medic.jpg';

import '../styles/pages/landing.css'

function Landing() {
  return (
    <div id="landing-page-content">
      <header className="page-header">
        <img src={Logo} alt="Logo"/>
        <h1>Mudando a Oncologia</h1>
      </header>
      <main 
        style={{
          backgroundImage: 'url('+Ilustration+')',
          backgroundSize: "cover",
          width: '100vw',
          height: '100vh',
        }}
      >
        <aside>
          <Link to='/ds1' className="enter-button">
            Consultar os dados
          </Link>
        </aside>
        
      </main>
    </div>
  );
}

export default Landing;
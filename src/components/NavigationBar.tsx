import React from 'react';

import Logo from '../images/logo.png';
import CircleButton from '../components/CircleButton';
import '../styles/components/navigationBar.css';

export default function NavigationBar(){
  return(
    <>
      <aside className="navigation-bar">
        <img src={Logo} alt="Logo"/>
        <CircleButton
          number={1} 
          description="Onde os recursos públicos devem ser focados?"
        />
        <CircleButton 
          number={2} 
          description="Quais são os estados com maior incidência do câncer?"
        />
        <CircleButton 
          number={3} 
          description="Quais são as cidades com maior incidência do câncer?"
        />
        <CircleButton 
          number={4} 
          description="Onde existe a maior taxa de mortalidade?"
        />
        <CircleButton
          number={5} 
          description="Onde existe a maior taxa de crescimento?"
        />
      </aside>
    </>
  )
}
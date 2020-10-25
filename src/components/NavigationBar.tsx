import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../images/logo.png';
import CircleButton from '../components/CircleButton';
import '../styles/components/navigationBar.css';

export default function NavigationBar(){
  return(
    <>
      <aside className="navigation-bar">
        <img src={Logo} alt="Logo"/>
        <Link to='/ds1' className="ds1Btn">
          <CircleButton
            number={2} 
            description="Quais são os estados com maior incidência do câncer?"
          />
        </Link>
        <Link to='/ds2' className="ds2Btn">
          <CircleButton 
            number={4} 
            description="Onde existe a maior taxa de mortalidade?"
          />
        </Link>       
      </aside>
    </>
  )
}
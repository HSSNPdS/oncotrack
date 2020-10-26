import React from 'react';
import {Link} from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

import Logo from '../images/logo.png';
import CircleButton from '../components/CircleButton';

import '../styles/components/navigationBar.css';

export default function NavigationBar(){
  return(
    <>
      <aside className="navigation-bar">
        <img src={Logo} alt="Logo"/>
        <Link to='/ds2' className="ds1Btn">
          <CircleButton
            number={1} 
            description="Quais são os estados com maior incidência do câncer?"
          />
        </Link>
        <Link to='/ds1' className="ds2Btn">
          <CircleButton 
            number={2} 
            description="Onde existe a maior taxa de mortalidade?"
          />
        </Link>
        <Link to='/' className="backBtn">
          <FiArrowLeft size={80} color="#000"/>
        </Link>       
      </aside>
    </>
  )
}
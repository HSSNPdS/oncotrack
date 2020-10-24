import React, { CSSProperties } from 'react';
import '../styles/components/circleBtn.css';

interface PropsButton{
  number: Number,
  description: String,
}

const CircleButton: React.FC<PropsButton> = ({number, description}) => {
  return(
    <div className="box-button">
      <button>{number}</button>
      <p>{description}</p>
    </div>
  )
}

export default CircleButton;
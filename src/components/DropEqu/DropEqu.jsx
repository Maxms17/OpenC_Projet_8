import React, { useState } from 'react';
import Image from '../../assets/Vectorfleche.svg';
import './DropEqu.css';

const DropEqu = ({ logement }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleArrowClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="equ">
      <div className="my-dropdown_equ">
        <div className="menu_equ">
          <div className="arrow-container_equ" onClick={handleArrowClick}>
            <div className="title-container_equ">
              <p>Equipement</p>
              <img
                src={Image}
                alt="Arrow"
                className={`arrow-image_equ ${isExpanded ? 'rotated' : ''}`}
              />
            </div>
          </div>
        </div>
        <div className={`sous-menu_equ ${isExpanded ? 'expanded' : ''}`}>
          <p>{logement.equipments}</p>
        </div>
      </div>
    </div>
  );
};

export default DropEqu;

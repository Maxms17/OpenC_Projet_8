import React, { useState } from 'react';
import Image from '../../assets/Vectorfleche.svg';
import './DropDes.css';

const DropDes = ({ logement }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleArrowClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="des">
      <div className="my-dropdown_des">
        <div className="menu_des">
          <div className="arrow-container_des" onClick={handleArrowClick}>
            <div className="title-container_des">
              <p>Description</p>
              <img
                src={Image}
                alt="Arrow"
                className={`arrow-image_des ${isExpanded ? 'rotated' : ''}`}
              />
            </div>
          </div>
        </div>
        <div className={`sous-menu_des ${isExpanded ? 'expanded' : ''}`}>
          <p>{logement.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DropDes;

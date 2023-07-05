import React, { useState } from 'react';

import Image from '../../assets/Vectorfleche.svg'

import './Dropdown.css'

const MyComponent = ({ datas }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleArrowClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="my-dropdown">
        <div className="menu">
          <div className="arrow-container" onClick={handleArrowClick}>
            <div className="title-container">
              <p>{datas.title}</p>
              <img
                src={Image}
                alt="Arrow"
                className={`arrow-image ${isExpanded ? 'rotated' : ''}`}
              />
            </div>
          </div>
        </div>
        <div className={`sous-menu ${isExpanded ? 'expanded' : ''}`}>
          <p>{datas.para}</p>
        </div>
      </div>
    </>
  );
};

export default MyComponent;

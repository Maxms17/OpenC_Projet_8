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
            {isExpanded ? (
              <div className="title-container">
                <p>{datas.title}</p>
                <img src={Image} alt="Arrow" className="arrow-image" />
              </div>
              
            ) : (
              <div className="title-container">
                <p>{datas.title}</p>
                <img src={Image} alt="Arrow" className="arrow-image" />
              </div>
            )}
          </div>
        </div>
        {isExpanded && (
          <div className="sous-menu">
            <p>{datas.para}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default MyComponent;

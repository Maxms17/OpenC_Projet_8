import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';

import './Dropdown.css'

const MyComponent = ({ datas }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleArrowClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='my-dropdown'>
      <div className='menu'>
        <p>{datas.title}</p>
        <span onClick={handleArrowClick} style={{ cursor: 'pointer' }}>
          {isExpanded ? '▲' : '▼'}
        </span>
      </div>
      {isExpanded && (
        <div className='sous-menu'>
          <p>{datas.para}</p>
          <Dropdown datas={datas} />
        </div>
      )}
    </div>
  );
};

export default MyComponent;

import React from 'react';

import './Info.css'

const Info = ({ logement }) => {
  return (
    <div className='info'>
      <div className='tilte'>
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
      </div>
      <div className='host'>
        <p>{logement.host.name}</p>
        <img src={logement.host.picture} alt="Hôte du logement" />
      </div>
    </div>
  );
};

export default Info;
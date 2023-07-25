import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './Info.css'

const Info = ({ logement }) => {

  const etoilepleine = () => {
    return Array.from({ length: logement.rating }, (_, index) => (
      <FontAwesomeIcon icon={faStar} />
    ));
  };

  const etoilevide = () => {
    return Array.from({ length: 5 - logement.rating }, (_, index) => (
      <FontAwesomeIcon icon={faStar} />
    ));
  };

  return (
    <div className='conteneur'>

      <div className='info_gauche'>

        <div className='tilte'>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
        </div>
       
        <div className='tag'>
          {Array.isArray(logement.tags) ? (
            logement.tags.map((tag, index) => (
              <div className='tag_name' key={index}>
                <p>{tag}</p>
              </div>
            ))
          ) : (
            <div className='tag_name'>
              <p>{logement.tags}</p>
            </div>
          )}
        </div>

      </div>

      <div className='info_droite'>

        <div className='host'>
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt="Hôte du logement" />
        </div>

        <div className='etoile'>
          <div className='etoile_plein'>{etoilepleine()}</div>
          <div className='etoile_vide'>{etoilevide()}</div>
        </div>

      </div>

    </div>
  );
};

export default Info;
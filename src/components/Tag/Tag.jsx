import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './Tag.css';

const Tag = ({ logement }) => {
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
      <div className='tag'>
            {Array.isArray(logement.tags) ? (
            logement.tags.map((item, index) => (
                <div  className='tag_name'><p key={index}>{item}</p></div>
            ))
            ) : (
            <div className='tag_name'><p>{logement.tags}</p></div>
            )}
      </div>
      <div className='etoile'>
        <div className='etoile_plein'>{etoilepleine()}</div>
        <div className='etoile_vide'>{etoilevide()}</div>
      </div>
    </div>
  );
};

export default Tag;

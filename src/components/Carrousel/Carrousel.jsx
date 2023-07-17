import React, { useState, useEffect } from 'react'

import Image from '../../assets/Vectorfleche.svg';

import './Carrousel.css';

const Carrousel = ({ logement }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testnumerisation = logement.pictures.length > 1;

  useEffect(() => {
    const lastIndex = logement.pictures.length - 1;
    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    } else if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, logement.pictures]);

  return (
    <div>
      <div className='carrousel'>
        {testnumerisation && (
          <div className='numerisation'>
            <p>{currentIndex + 1} / {logement.pictures.length}</p>
          </div>
        )}
        <div className="container">
        <img src={logement.pictures[currentIndex]} alt='Logement' className='image-fond' />
          {testnumerisation && (
            <>
              <img src={Image} alt='Arrow' className='Image_fleche_Gauche' onClick={() => setCurrentIndex(currentIndex - 1)} />
              <img src={Image} alt='Arrow' className='Image_fleche_Droite' onClick={() => setCurrentIndex(currentIndex + 1)} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carrousel;

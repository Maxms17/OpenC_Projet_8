import React, { useState, useEffect } from 'react'

import Image from '../../assets/Vectorfleche.svg';

import './Carrousel.css';

const Carrousel = ({ logement }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const lastIndex = logement.pictures.length - 1;
    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    } else if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, logement.pictures]);

  const NextImage = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const PrevImage = () => {
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <div>
      <div className='carrousel'>
        <div className='numerisation'>
          <p className='numerisation-texte'>
            {currentIndex + 1} / {logement.pictures.length}
          </p>
        </div>
        <div className="container">
          <img src={logement.pictures[currentIndex]} alt="Logement" className="image-fond" />
          <img src={Image} alt="Arrow" className="Image_fleche_Gauche" onClick={PrevImage} />
          <img src={Image} alt="Arrow" className="Image_fleche_Droite" onClick={NextImage} />
        </div>
      </div>
    </div>
  );
};

export default Carrousel;

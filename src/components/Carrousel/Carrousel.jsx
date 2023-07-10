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

  const goToNextLogement = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const goToPreviousLogement = () => {
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <div>
      <div className='carrousel'>
        <img src={Image} alt="Arrow" className="Image_fleche_Gauche" onClick={goToPreviousLogement} />
        <img src={logement.pictures[currentIndex]} alt="Logement" className="image-fond" />
        <img src={Image} alt="Arrow" className="Image_fleche_Droite" onClick={goToNextLogement} />
      </div>
    </div>
  );
};

export default Carrousel;

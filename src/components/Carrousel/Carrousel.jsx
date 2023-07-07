import React, { useState } from 'react';
import Info from "../../components/Info/Info";
import Tag from "../../components/Tag/Tag";
import DropDes from "../../components/DropDes/DropDes";
import DropEqu from "../../components/DropEqu/DropEqu";

import Image from '../../assets/Vectorfleche.svg';

import './Carrousel.css';

const Carrousel = ({ logement }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextLogement = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logement.length);
  };

  const goToPreviousLogement = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + logement.length) % logement.length);
  };

  return (
    <div>
      <div className='carrousel'>
        <img src={Image} alt="Arrow" className="Image_fleche_Gauche" onClick={goToPreviousLogement} />
        <img src={logement.cover} alt="Logement" className="image-fond" />
        <img src={Image} alt="Arrow" className="Image_fleche_Droite" onClick={goToNextLogement} />
      </div>
      <div>
        <Info logement={logement} />
        <Tag logement={logement} />
        <div className='drop'>
            <DropDes logement={logement} />
            <DropEqu logement={logement} />
        </div>
      </div>
    </div>
  );
};

export default Carrousel;

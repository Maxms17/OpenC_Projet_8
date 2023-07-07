import React from 'react';

import Image from '../../assets/Vectorfleche.svg'

import Data from '../../data.json'; // Importe les données depuis le fichier JSON

import { useParams } from 'react-router-dom';

import './Carrousel.css'

const Carrousel = () => {
    const { id } = useParams();
  
    // Recherche du logement correspondant dans les données en utilisant l'ID
    const logement = Data.find((datas) => datas.id === id);

    return (
        <div>
            <img src={Image} alt="Arrow" className={`Image_fleche_Gauche`} />
            <img src={logement.cover} alt="Arrow" className={`image-fond`} />
            <img src={Image} alt="Arrow" className={`Image_fleche_Droite`} />
        </div>
    );

}

export default Carrousel;
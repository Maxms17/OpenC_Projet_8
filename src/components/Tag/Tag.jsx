import React from 'react';

import Data from '../../data.json'; // Importe les données depuis le fichier JSON

import { useParams } from 'react-router-dom';

import './Tag.css'

const Tag = () => {
    const { id } = useParams();
  
    // Recherche du logement correspondant dans les données en utilisant l'ID
    const logement = Data.find((datas) => datas.id === id);

    return (
        <div>
            <div>
                <p>{logement.tags}</p>
            </div>
            <div>
                <p>{logement.rating}</p>
            </div>
        </div>
    );

}

export default Tag;
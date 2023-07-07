import React from 'react';

import Data from '../../data.json'; // Importe les données depuis le fichier JSON

import { useParams } from 'react-router-dom';

import './Info.css'

const Info = () => {
    const { id } = useParams();
  
    // Recherche du logement correspondant dans les données en utilisant l'ID
    const logement = Data.find((datas) => datas.id === id);

    return (
        <div>
            <div>
                <h1>{logement.title}</h1>
                <p>{logement.location}</p>
            </div>
            <div>
                <p>{logement.host.name}</p>
            </div>
            <div>
                <img src={logement.host.picture} alt="Host Picture" />
            </div>
        </div>
    );

}

export default Info;
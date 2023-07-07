import React, { useState } from 'react';

import Data from '../../data.json'; // Importe les données depuis le fichier JSON
import Image from '../../assets/Vectorfleche.svg'
import { useParams } from 'react-router-dom';

import './DropDes.css'

const DropDes = () => {
    const { id } = useParams();
    const [isExpanded, setIsExpanded] = useState(false);

    const handleArrowClick = () => {
        setIsExpanded(!isExpanded);
    };
    // Recherche du logement correspondant dans les données en utilisant l'ID
    const logement = Data.find((datas) => datas.id === id);

    return (
        <div>
            <div className="my-dropdown">
                <div className="menu">
                <div className="arrow-container" onClick={handleArrowClick}>
                    <div className="title-container">
                    <p>Description</p>
                    <img
                        src={Image}
                        alt="Arrow"
                        className={`arrow-image ${isExpanded ? 'rotated' : ''}`}
                    />
                    </div>
                </div>
                </div>
                <div className={`sous-menu ${isExpanded ? 'expanded' : ''}`}>
                <p>{logement.description}</p>
                </div>
            </div>
        </div>
    );

}

export default DropDes;
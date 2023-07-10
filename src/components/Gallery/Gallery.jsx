import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

import Data from '../../data.json'; // Importe les données depuis le fichier JSON

function Gallery() {
    const limitedData = Data.slice(0, 6); // Obtient les 6 premiers éléments du tableau

    return (
        <div className="my-Gallery">
            {limitedData.map((datas) => (
                <Link to={`/logement/${datas.id}`} key={datas.id} className='carte'>
                  <p>{datas.title}</p>
                </Link>
            ))}
        </div>
    )
}

export default Gallery

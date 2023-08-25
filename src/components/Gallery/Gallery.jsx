import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

import Data from '../../data.json'; // Importe les données depuis le fichier JSON

function Gallery() {
    // const limitedData = Data.slice(-6); // Obtient les 6 derniers éléments du tableau

    return (
        <div className="my-Gallery">
        {Data.map((data) => (
          <Link to={`/logement/${data.id}`} className="carte" key={data.id}>
            <div className="image-container" style={{ backgroundImage: `url(${data.cover})` }}>
                <p>{data.title}</p>
            </div>
          </Link>
        ))}
      </div>
    )
}

export default Gallery

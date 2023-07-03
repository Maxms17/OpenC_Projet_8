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

/*
import React, { useState, useEffect } from 'react';
import './Gallery.css';

function Gallery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../../data.json'); // Chemin vers ton fichier JSON
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log('Erreur lors du chargement des données :', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="my-Gallery">
      {data.map((datas) => (
        <div className='carte' key={datas.id}>
          <p>{datas.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
*/
import React from "react";
import Layout from "../../components/Layout";
import Carrousel from "../../components/Carrousel/Carrousel";
import Info from "../../components/Info/Info";
import Tag from "../../components/Tag/Tag";
import Dropdown from '../../components/Dropdown/Dropdown';

import Data from '../../data.json'; // Importe les données depuis le fichier JSON

import { useParams } from 'react-router-dom';
import './Logement.css'

function Logement() {
  const { id } = useParams();

  // Recherche du logement correspondant dans les données en utilisant l'ID
  const logement = Data.find((datas) => datas.id === id);

  if (!logement) {
    // Gérer le cas où le logement n'est pas trouvé
    return <div><p>Logement introuvable</p></div>;
  }

  return (
    <Layout>
      <div key={logement.id}>
        <Carrousel logement={logement} /> {/* Passer les données logement au composant Carrousel */}
        <Info logement={logement} />
        <Tag logement={logement} />
        <div className='drop'>
          <Dropdown title={'Description'} para={logement.description}/>
          <Dropdown title={'Equipement'} para={logement.equipments}/>
        </div>
      </div>
    </Layout>
  );
}

export default Logement;

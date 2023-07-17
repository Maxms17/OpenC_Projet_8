import React from "react";
import Layout from "../../components/Layout";
import Carrousel from "../../components/Carrousel/Carrousel";
import Info from "../../components/Info/Info";
import Tag from "../../components/Tag/Tag";
import Dropdown from '../../components/Dropdown/Dropdown';

import Data from '../../data.json'; // Importe les données depuis le fichier JSON

import { useParams, useNavigate } from 'react-router-dom';
import './Logement.css'

function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Recherche du logement correspondant dans les données en utilisant l'ID
  const logement = Data.find((datas) => datas.id === id);

  if (!logement) {
    // Rediriger vers la page d'erreur lorsque le logement n'est pas trouvé
    navigate.push("*");
    return null; // Vous pouvez également renvoyer un composant d'erreur ici directement.
  }

  return (
    <Layout>
      <div key={logement.id}>
        <Carrousel logement={logement} />
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

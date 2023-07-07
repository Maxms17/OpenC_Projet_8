import React from "react";
import Layout from "../../components/Layout";
import Carrousel from "../../components/Carrousel/Carrousel";

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
      </div>
    </Layout>
  );
}

export default Logement;

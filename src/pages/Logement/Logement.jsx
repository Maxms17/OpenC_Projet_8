import React from "react";
import Layout from "../../components/Layout";
import Carrousel from "../../components/Carrousel/Carrousel";
import Info from "../../components/Info/Info";
import Tag from "../../components/Tag/Tag";
import DropDes from "../../components/DropDes/DropDes";
import DropEqu from "../../components/DropEqu/DropEqu";

import Data from '../../data.json'; // Importe les données depuis le fichier JSON

import { useParams } from 'react-router-dom';

function Logement() {
    const { id } = useParams();
  
    // Recherche du logement correspondant dans les données en utilisant l'ID
    const logement = Data.find((datas) => datas.id === id);
  
    if (!logement) {
      // Gérer le cas où le logement n'est pas trouvé
      return <div>Logement introuvable</div>;
    }
  
    return (
      <Layout>
        <div key={logement.id}>
            <Carrousel />
            <Info />
            <Tag />
            <DropDes />
            <DropEqu />
        </div>
      </Layout>
    );
  }
  
export default Logement;

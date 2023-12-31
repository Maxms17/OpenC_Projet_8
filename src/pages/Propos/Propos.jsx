import React from "react"
import Layout from "../../components/Layout"
import ImageBanner from "../../components/ImageBanner/ImageBanner"
import Dropdown from '../../components/Dropdown/Dropdown';

import Image from '../../assets/Img_Propos.jpg'

import './Propos.css'

function Propos() {

    const datas = [
  
        { title: "Fiabilité", para: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
    
        { title: "Respect", para: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
    
        { title: "Service", para: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
    
        { title: "Sécurité", para: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." },
  
    ];

    return (
        <Layout>
            <ImageBanner src={Image}/>
            <div className="panneau">
                {datas.map((data, index) => (
                    <Dropdown key={index} title={data.title} para={data.para}/>
                ))}
            </div>
        </Layout>
    )
}

export default Propos
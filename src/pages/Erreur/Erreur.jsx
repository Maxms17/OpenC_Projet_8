import React from "react"
import { Link } from 'react-router-dom';
import Layout from "../../components/Layout"

import './Erreur.css'

function Erreur() {
    return (
        <Layout>
            <div className="Erreur-404">
                <p>404</p>
            </div>
            <div className="Erreur-text">
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <div className="Erreur-lien">
                <Link to={`/`}>
                    <p>Retourner sur la page d'accueil</p>
                </Link>
            </div>
        </Layout>
    )
}

export default Erreur
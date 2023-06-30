import React from 'react';
import './Panneau.css'


function Panneau() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };
    
    return (
        <div className="my-dropdown">
            <button onClick={handleOpen}>Fiabilité</button>

                {open ? (
                    <ul className="menu">
                        <li className="menu-item">
                            <p>
                            Les annonces postées sur Kasa garantissent une fiabilité totale. 
                            Les photos sont conformes aux logements, et toutes les informations 
                            sont régulièrement vérifiées par nos équipes.
                            </p>
                        </li>
                    </ul>
                ) : null}
                {open ? <div className="menu-open"> </div> : <div className="menu-close"> </div>}

            <button onClick={handleOpen}>Respect</button>
                {open ? (
                    <ul className="menu">
                        <li className="menu-item">
                            <p>
                            La bienveillance fait partie des valeurs fondatrices de Kasa.
                            Tout comportement discriminatoire ou de perturbation du voisinage
                            entraînera une exclusion de notre plateforme.
                            </p>
                        </li>
                    </ul>
                ) : null}
                {open ? <div className="menu-open"> </div> : <div className="menu-close"> </div>}

            <button onClick={handleOpen}>Service</button>
                {open ? (
                    <ul className="menu">
                        <li className="menu-item">
                            <p>
                            La bienveillance fait partie des valeurs fondatrices de Kasa.
                            Tout comportement discriminatoire ou de perturbation du voisinage
                            entraînera une exclusion de notre plateforme.
                            </p>
                        </li>
                    </ul>
                ) : null}
                {open ? <div className="menu-open"> </div> : <div className="menu-close"> </div>}

            <button onClick={handleOpen}>Sécurité</button>
                {open ? (
                    <ul className="menu">
                        <li className="menu-item">
                            <p>
                            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
                            chaque logement correspond aux critères de sécurité établis par nos services. En laissant une
                            note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les 
                            standards sont bien respectés. Nous organisons également des ateliers sur la 
                            sécurité domestique pour nos hôtes.
                            </p>
                        </li>
                    </ul>
                ) : null}
                {open ? <div className="menu-open"> </div> : <div className="menu-close"> </div>}

        </div>
    );
}

export default Panneau
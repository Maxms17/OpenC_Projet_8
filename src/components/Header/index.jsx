import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/pages/Home">Accueil</Link>
            <Link to="/pages/Logement">Logement</Link>
            <Link to="/pages/Propos">Propos</Link>
            <Link to="/pages/Erreur">Erreur</Link>
        </nav>
    )
}

export default Header
import { Link } from 'react-router-dom'
import logo from '../../assets/LOGO.jpg'
import '../../styles/Banner.css'

function Header() {
    return (
        <div className='my-banner'>
            <img src={logo} alt='Kasa' className='my-logo' />
            <nav>
                <Link to="/pages/Home">Accueil</Link>
                <Link to="/pages/Logement">Logement</Link>
                <Link to="/pages/Propos">Propos</Link>
                <Link to="/pages/Erreur">Erreur</Link>
            </nav>
        </div>
    )
}

export default Header


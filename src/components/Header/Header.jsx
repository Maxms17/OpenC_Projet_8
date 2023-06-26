import { Link } from 'react-router-dom'
import logo from '../../assets/LOGO.jpg'
import './Header.css'

function Header() {
    return (
        <div className='my-header'>
            <img src={logo} alt='Kasa' className='my-logo' />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/propos">Propos</Link> 
            </nav>
        </div>
    )
}

export default Header


import logo from '../assets/LOGO.jpg'
import '../styles/Banner.css'

function Banner() {
    const title = 'Le projet 8 React'
    return (
        <div className='titre-banner'>
            <img src={logo} alt='Kasa' className='titre-logo' />
            <h1 className='titre-title'>{title}</h1>
        </div>
    )
}

export default Banner
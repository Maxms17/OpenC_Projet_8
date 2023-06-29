
import './Panneau.css'
import Img_Propos from '../../assets/Img_Accueil.jpg'

function Panneau() {
    return (
        <div className='my-Panneau'>
            <img src={Img_Propos} alt='Kasa' className='my-Img_Propos' />
        </div>
    )
}

export default Panneau
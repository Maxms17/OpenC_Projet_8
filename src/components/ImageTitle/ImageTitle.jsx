import './ImageTitle.css'
import Img_Accueil from '../../assets/Img_Accueil.jpg'

function ImageTitle() {
    return (
        <div className='my-ImageTitle'>
            <img src={Img_Accueil} alt='Kasa' className='my-Img_Accueil'> <p> Chez vous, partout et ailleurs </p> </img>
           
        </div>
    )
}

export default ImageTitle
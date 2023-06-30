import React from 'react';
import './ImagePropos.css'
import Img_Propos from '../../assets/Img_Propos.svg'

function ImageTitle() {
    return (
        <div className='my-ImagePropos'>
            <img src={Img_Propos} alt='Kasa' className='my-Img_Propos' />
        </div>
    )
}

export default ImageTitle
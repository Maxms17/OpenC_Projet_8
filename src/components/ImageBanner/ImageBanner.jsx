import React from 'react';
import './ImageBanner.css'

function ImageBanner({src, para}) {
    return (
        <div className='my-ImageBanner'>
            <img src={src} alt='Kasa' className='my-Img_Accueil' />
            {para && <p className='my-ImageText'>{para}</p>}
        </div>
    )
}

export default ImageBanner
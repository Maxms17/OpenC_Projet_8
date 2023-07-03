import React from 'react';
import './ImageBanner.css'

function ImageBanner({src, para}) {
    return (
        <div className='my-ImageTitle'>
            <img src={src} alt='Kasa' className='my-Img_Accueil' />
            {para && <p>{para}</p>}
        </div>
    )
}

export default ImageBanner
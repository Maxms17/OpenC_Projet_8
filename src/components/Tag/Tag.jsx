import React from 'react';

import './Tag.css'

const Tag = ({ logement }) => {

    return (
        <div>
            <div className='tag'>
                <p>{logement.tags}</p>
            </div>
            <div className='etoile'>
                <p>{logement.rating}</p>
            </div>
        </div>
    );

}

export default Tag;
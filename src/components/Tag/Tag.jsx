import React from 'react';

import './Tag.css'

const Tag = ({ logement }) => {

    return (
        <div>
            <div>
                <p>{logement.tags}</p>
            </div>
            <div>
                <p>{logement.rating}</p>
            </div>
        </div>
    );

}

export default Tag;
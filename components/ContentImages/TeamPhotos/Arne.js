import React, { useState } from 'react';

import photoArne from '../../../assets/images/team/Arne.jpg';

import classes from './Team.module.css'

export const CandidatePhotoArne = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={photoArne} alt="Arne photo"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}
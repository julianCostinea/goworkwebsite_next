import React, { useState } from 'react';

import photoIgnacio from '../../../assets/images/team/ignacio.jpg';

import classes from './Team.module.css'

export const CandidatePhotoIgnacio= () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={photoIgnacio} alt="Ignacio photo"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}
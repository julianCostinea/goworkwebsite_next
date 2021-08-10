import React, { useState } from 'react';

import photoJulian from '../../../assets/images/team/Julian.jpg';

import classes from './Team.module.css'

export const CandidatePhotoJulian = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={photoJulian} alt="Julian photo"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}
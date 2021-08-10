import React, { useState } from 'react';

import photoTrine from '../../../assets/images/team/Trine.jpg';

import classes from './Team.module.css'

export const CandidatePhotoTrine = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={photoTrine} alt="Trine photo"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}
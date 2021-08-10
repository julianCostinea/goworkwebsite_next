import React, { useState } from 'react';

import photoErik from '../../../assets/images/team/Erik.jpg';

import classes from './Team.module.css'

export const CandidatePhotoErik = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={photoErik} alt="Erik photo"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}
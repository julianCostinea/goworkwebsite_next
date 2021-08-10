import React, { useState } from 'react';

import OlePhoto from '../../../assets/images/team/Ole.jpg';

import classes from './Team.module.css'

export const CandidatePhotoOle = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={OlePhoto} alt="Ole photo"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}
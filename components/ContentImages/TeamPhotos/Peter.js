import React, { useState } from 'react';

import photoPeter from '../../../assets/images/team/Peter.jpg';

import classes from './Team.module.css'

export const CandidatePhotoPeter = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={photoPeter} alt="Peter photo"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}
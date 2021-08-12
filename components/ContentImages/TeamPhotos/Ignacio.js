import React, { useState } from 'react';
import Image from 'next/image';

import classes from './Team.module.css'

export const CandidatePhotoIgnacio = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <Image
            width="320px" height="304px" 
            style={loaded ? {} : { display: 'none' }} 
            src="/images/team/Ignacio.jpg" alt="Ignacio photo"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}
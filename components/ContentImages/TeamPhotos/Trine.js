import React, { useState } from 'react';
import Image from 'next/image';

import classes from './Team.module.css'

export const CandidatePhotoTrine = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <Image
            width="320px" height="304px" 
            style={loaded ? {} : { display: 'none' }} 
            src="/images/team/Trine.jpg" alt="Trine photo"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}
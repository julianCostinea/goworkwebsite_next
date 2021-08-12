import React, { useState } from 'react';
import Image from 'next/image';

import classes from './Team.module.css'

export const CandidatePhotoOle = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <Image
            width="320px" height="304px" 
            style={loaded ? {} : { display: 'none' }} 
            src="/images/team/Ole.jpg" alt="Ole photo"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}
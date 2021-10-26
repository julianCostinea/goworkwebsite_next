import React, { useState } from 'react';
import Image from 'next/image';

import classes from './Team.module.css'

export const CandidatePhotoJonas = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <Image
            width="320px" height="304px" 
            loading="eager"
            style={loaded ? {} : { display: 'none' }} 
            src="/images/team/Jonas.jpg" alt="Jonas photo"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}
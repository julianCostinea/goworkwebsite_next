import React, { useState } from 'react';
import Image from 'next/image';

import classes from './Team.module.css'

export const CandidatePhotoAnne = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <Image
            width="272px" height="256px" 
            loading="eager"
            objectFit="fill"
            style={loaded ? {} : { display: 'none' }} 
            src="/images/team/Anne.jpg" alt="Anne photo"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}
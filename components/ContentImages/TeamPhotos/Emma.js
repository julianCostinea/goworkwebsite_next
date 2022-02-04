import React, { useState } from 'react';
import Image from 'next/image';

import classes from './Team.module.css'

export const CandidatePhotoEmma = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <Image
            width="272px" height="256px" 
            loading="eager"
            objectFit="fill"
            style={loaded ? {} : { display: 'none' }} 
            src="/images/team/Emma.jpg" alt="Foto mangler"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}
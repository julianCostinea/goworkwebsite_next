import React, { useState } from 'react';
import Image from 'next/image';

import classes from './Team.module.css'

export const CandidatePhotoErik = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <Image
            width="272px" height="256px" 
            loading="eager"
            style={loaded ? {} : { display: 'none' }} 
            src="/images/team/Erik.jpg" alt="Erik photo"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}
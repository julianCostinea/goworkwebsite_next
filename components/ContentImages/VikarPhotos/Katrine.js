import React, { useState } from 'react';
import Image from 'next/image'

import classes from './Vikar.module.css'

export const VikarPhotoKatrine = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.VikarPhoto}>
        {/* EAGER LOAD IMAGE */}
        <Image
            width="96px" height="96px" 
            style={loaded ? {} : { display: 'none' }} 
            src='/images/Vikarer/Katrine.jpg' alt="Katrine"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}
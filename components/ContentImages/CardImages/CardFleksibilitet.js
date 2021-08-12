import React, { useState } from 'react';
import Image from 'next/image';

import classes from './CardImage.module.css'

const CardPhoto = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <Image 
            width="320px" height="304px"
            style={loaded ? {} : { display: 'none' }} 
            src="/images/fleksibilitet.svg" alt="Fleksibilitet"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}


export default CardPhoto;
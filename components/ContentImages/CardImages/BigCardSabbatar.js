import React, { useState } from 'react';
import Image from 'next/image';

import classes from './BigCardImage.module.css'

const BigCardPhoto = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <Image
            width="350px" height="320px" 
            style={loaded ? {} : { display: 'none' }} 
            src="/images/stillinger/stillinger-sabataar.svg" alt="Studerende"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}


export default BigCardPhoto;
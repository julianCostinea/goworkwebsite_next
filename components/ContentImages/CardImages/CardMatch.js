import React, { useState } from 'react';
import Image from 'next/image'

import classes from './CardImage.module.css'

const CardPhoto = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <Image 
            width= "350px" height="350px"
            style={loaded ? {} : { display: 'none' }} 
            src="/images/virksomheder/virksomheder_godtmatch_v3.svg" alt="Match"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}


export default CardPhoto;
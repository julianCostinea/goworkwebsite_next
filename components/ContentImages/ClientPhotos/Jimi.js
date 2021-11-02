import React, { useState } from 'react';
import Image from 'next/image'

import classes from './ClientPhoto.module.css'

export const ClientPhotoJimi = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.ClientPhoto}>
        <Image 
            loading="eager"
            width= "100px" height="100px"
            style={loaded ? {} : { display: 'none' }} 
            src="/images/Clients/Jimi.png" alt="Jimi"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}
import React, { useState } from 'react';
import Image from 'next/image'

import classes from './ClientPhoto.module.css'

export const ClientPhotoJacob = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.ClientPhoto}>
        <Image 
            loading="eager"
            width= "100px" height="100px"
            style={loaded ? {} : { display: 'none' }} 
            src="/images/Clients/Jacob.png" alt="Jacob"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}
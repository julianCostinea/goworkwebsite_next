import React, {useState} from 'react';
import Image from 'next/image'

import classes from './ContentImage.module.css'

export const VikarPhoto = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.VikarPhoto}>
        <Image
            width="400px" height="330px" 
            style={loaded ? {} : { display: 'none' }} 
            src='/images/jobsøgende-grafik.svg' alt="Vikar"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}
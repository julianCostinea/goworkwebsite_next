import React, { useState } from 'react';
import Image from 'next/image';

import classes from './ApplicationProcess.module.css'

const ApplicationProcess = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className= {classes.ApplicationContainer}>
        <div className={classes.ApplicationPhoto}>
            <Image 
                width= "300px" height="240px"
                style={loaded ? {} : { display: 'none' }} 
                src="/images/ApplicationProcess/1eng.svg" alt="Application step 1"
                onLoad={() => setLoaded(true)}
                />
        </div>
        <div className={classes.ApplicationPhoto}>
            <Image
                width= "300px" height="240px"
                style={loaded ? {} : { display: 'none' }} 
                src="/images/ApplicationProcess/2eng.svg" alt="Application step 2"
                onLoad={() => setLoaded(true)}
                />
        </div>
        <div className={classes.ApplicationPhoto}>
            <Image 
                width= "300px" height="240px"
                style={loaded ? {} : { display: 'none' }} 
                src="/images/ApplicationProcess/3eng.svg" alt="Application step 3"
                onLoad={() => setLoaded(true)}
                />
        </div>
        <div className={classes.ApplicationPhoto}>
            <Image 
                width= "300px" height="240px"
                style={loaded ? {} : { display: 'none' }} 
                src="/images/ApplicationProcess/4eng.svg" alt="Application step 4"
                onLoad={() => setLoaded(true)}
                />
        </div>
    </div>
);}


export default ApplicationProcess;
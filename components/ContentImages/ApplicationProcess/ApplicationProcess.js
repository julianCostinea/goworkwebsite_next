import React, { useState } from 'react';

import applicationStep1 from '../../../assets/images/ApplicationProcess/1.svg';
import applicationStep2 from '../../../assets/images/ApplicationProcess/2.svg';
import applicationStep3 from '../../../assets/images/ApplicationProcess/3.svg';
import applicationStep4 from '../../../assets/images/ApplicationProcess/4.svg';

import classes from './ApplicationProcess.module.css'

const ApplicationProcess = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className= {classes.ApplicationContainer}>
        <div className={classes.ApplicationPhoto}>
            <img 
                style={loaded ? {} : { display: 'none' }} 
                src={applicationStep1} alt="Application step 1"
                onLoad={() => setLoaded(true)}
                />
        </div>
        <div className={classes.ApplicationPhoto}>
            <img 
                style={loaded ? {} : { display: 'none' }} 
                src={applicationStep2} alt="Application step 2"
                onLoad={() => setLoaded(true)}
                />
        </div>
        <div className={classes.ApplicationPhoto}>
            <img 
                style={loaded ? {} : { display: 'none' }} 
                src={applicationStep3} alt="Application step 3"
                onLoad={() => setLoaded(true)}
                />
        </div>
        <div className={classes.ApplicationPhoto}>
            <img 
                style={loaded ? {} : { display: 'none' }} 
                src={applicationStep4} alt="Application step 4"
                onLoad={() => setLoaded(true)}
                />
        </div>
    </div>
);}


export default ApplicationProcess;
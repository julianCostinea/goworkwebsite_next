import React from 'react';
import Image from 'next/image';

import classes from './ContentImage.module.css'

const LinkedInLanding1 = () => (
    <div className={classes.ImageDiv}>
        <Image
            quality= "100"
            width="450px" height="330px"
            className={classes.Laptop} src="/images/linkedInLanding/truck.jpg" alt="Gaffel truck billede" />
    </div>
);

export default LinkedInLanding1;
import React from 'react';
import Image from 'next/image';

import classes from './ContentImage.module.css'

const VirksomehederImg = (props) => (
    <div>
        <Image 
            loading="eager"
            width="350px" height="330px"
            className={classes.Laptop} src="/images/jobsoegende/jobsoegende-team_v2.svg" alt="Virksomeheder" />
    </div>
);

export default VirksomehederImg;
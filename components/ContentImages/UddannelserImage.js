import React from 'react';
import Image from 'next/image';

import classes from './ContentImage.module.css'

const UddannelserImg = (props) => (
    <div className={classes.ImageDiv}>
        <Image 
            loading="eager"
            width="400px" height="330px"
            className={classes.Laptop}
            src="/images/uddannelser.svg" alt="Uddannelser" />
    </div>
);

export default UddannelserImg;
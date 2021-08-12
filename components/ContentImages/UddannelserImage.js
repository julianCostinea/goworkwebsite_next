import React from 'react';
import Image from 'next/image';

import classes from './ContentImage.module.css'

const UddannelserImg = (props) => (
    <div style={{ height: props.height }}>
        <Image 
            loading="eager"
            className={classes.Laptop} width="400px" height="330px"
            src="/images/uddannelser.svg" alt="Uddannelser" />
    </div>
);

export default UddannelserImg;
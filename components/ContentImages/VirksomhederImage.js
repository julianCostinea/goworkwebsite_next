import React from 'react';
import Image from 'next/image';

import classes from './ContentImage.module.css'

const VirksomehederImg = (props) => (
    <div style={{ height: props.height }}>
        <Image 
            width="400px" height="330px"
            className={classes.Laptop} src="/images/virksomheder/virksomheder_front_v3.svg" alt="Virksomeheder" />
    </div>
);

export default VirksomehederImg;
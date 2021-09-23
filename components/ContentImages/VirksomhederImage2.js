import React from 'react';
import Image from 'next/image';

import classes from './ContentImage.module.css'

const VirksomehederImg2 = (props) => (
    <div style={{ height: props.height }}>
        <Image
            quality= "100"
            width="550px" height="550px"
            className={classes.Laptop} src="/images/virksomheder/virksomheder_burg.png" alt="Hvorfor os" />
    </div>
);

export default VirksomehederImg2;
import React from 'react';
import Image from 'next/image';

import classes from './ContentImage.module.css'

const VirksomehederImg2 = (props) => (
    <div className={classes.ImageDiv}>
        <Image
            quality= "100"
            width="450px" height="530px"
            className={classes.Laptop} src="/images/virksomheder/virksomheder_burg.png" alt="Hvorfor os" />
    </div>
);

export default VirksomehederImg2;
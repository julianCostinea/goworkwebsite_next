import React from 'react';
import Image from 'next/image';

import classes from './ContentImage.module.css'

const UddanelserImage = (props) => (
    <div className={classes.ImageDiv2}>
        <Image
            width="500px" height="500px" 
            className={classes.Laptop} src="/images/virksomheder/virksomheder_godtmatch_v3.svg" alt="Hvorfor os" />
    </div>
);

export default UddanelserImage;
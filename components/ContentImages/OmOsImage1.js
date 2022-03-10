import React from 'react';
import Image from 'next/image';

import classes from './ContentImage.module.css'

const UddanelserImage = (props) => (
    <div className={classes.ImageDiv}>
        <Image
            quality= "100"
            width="450px" height="450px"
            className={classes.Laptop} src="/images/om-os/Info_1.svg" alt="Om os" />
    </div>
);

export default UddanelserImage;
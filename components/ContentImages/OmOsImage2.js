import React from 'react';
import Image from 'next/image';

import classes from './ContentImage.module.css'

const UddanelserImage = (props) => (
    <div className={classes.ImageDiv}>
        <Image
            quality= "100"
            width="640px" height="590px"
            className={classes.Laptop} src="/images/om-os/Bliv_klar_til_fremtiden_3.svg" alt="Klar til fremtiden" />
    </div>
);

export default UddanelserImage;
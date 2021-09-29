import React from 'react';
import Image from 'next/image';

import classes from './ContentImage.module.css'

const UddanelserImage = (props) => (
    <div className={classes.ImageDiv}>
        <Image
            quality= "100"
            width="450px" height="600px"
            className={classes.Laptop} src="/images/uddannelser/dude_removebg.png" alt="Hvorfor os" />
    </div>
);

export default UddanelserImage;
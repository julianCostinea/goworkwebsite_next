import React from 'react';
import Image from 'next/image';

import classes from './ContentImage.module.css'

const VirksomehederImg2 = (props) => (
    <div className={classes.ImageDiv2}>
        <Image
            quality= "100"
            width="640px" height="530px"
            className={classes.Laptop} src="/images/virksomheder/virksomheder_front_v3.svg" alt="Personale til dit behov" />
    </div>
);

export default VirksomehederImg2;
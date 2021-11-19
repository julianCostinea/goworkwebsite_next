import React from 'react';
import Image from 'next/image';

import classes from './ContentImage.module.css'

const VirksomehederImg4 = (props) => (
    <div className={classes.ImageDiv3}>
        <Image
            quality= "100"
            width="640px" height="530px"
            className={classes.Laptop} src="/images/virksomheder/virksomheder_hoejdaekning_v2.svg" alt="Hvorfor os" />
    </div>
);

export default VirksomehederImg4;
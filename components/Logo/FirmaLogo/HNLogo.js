import React from 'react';
import Image from 'next/image';

import classes from './FirmaLogo.module.css';

const logo = () => {
    return (
    <div className={classes.Logo}>
            <Image 
                width= "100px" height="100px"
                src="/images/Harald_Nyborg.svg" alt="Harald Nyborg Logo" />
    </div>
    )
};

export default logo;
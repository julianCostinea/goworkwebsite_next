import React from 'react';
import Image from 'next/image'

import classes from './FirmaLogo.module.css';

const logo = () => {
    return (
    <div className={`${classes.Logo} ${classes.RUCLogo}`}>
            <Image 
                width= "100px" height="100px"
                src="/images/RUC_logo.svg" alt="Roskilde Universitet Logo" />
    </div>
    )
};

export default logo;
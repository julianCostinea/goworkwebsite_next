import React from 'react';
import Image from 'next/image';

import classes from './Simply.module.css';

const logo = () => {
    return (
    <div className={classes.Logo}>
            <Image 
                width= "100px" height="100px"
                src="/images/Simply_logo.svg" alt="Simply Chocolate Logo" />
    </div>
    )
};

export default logo;
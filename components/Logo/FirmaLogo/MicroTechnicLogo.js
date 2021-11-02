import React from 'react';
import Image from 'next/image';

import classes from './SchoolLogos.module.css';

const logo = () => {
    return (
    <div className={classes.Logo2}>
            <Image 
                width="320px" height="304px"
                src="/images/microtechnic0.png" alt="Micro Technic Logo" />
    </div>
    )
};

export default logo;
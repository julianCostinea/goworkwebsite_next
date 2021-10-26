import React from 'react';
import Image from 'next/image';

import classes from './SchoolLogos.module.css';

const AarhusKatedralskole = () => {
    return (
    <div className={classes.LogoScaled}>
            <Image 
                width="320px" height="304px"
                quality={100}
                src="/images/uddannelser/aarhus_katedralskole.svg" alt="Aarhus katedralskole Logo" />
    </div>
    )
};

export default AarhusKatedralskole;
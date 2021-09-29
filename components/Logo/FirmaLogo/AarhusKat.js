import React from 'react';
import Image from 'next/image';

import classes from './SchoolLogos.module.css';

const AarhusKatedralskole = () => {
    return (
    <div className={classes.Logo}>
            <Image 
                width="320px" height="304px"
                src="/images/uddannelser/aarhus_katedralskole.png" alt="Aarhus katedralskole Logo" />
    </div>
    )
};

export default AarhusKatedralskole;
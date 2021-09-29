import React from 'react';
import Image from 'next/image';

import classes from './SchoolLogos.module.css';

const HaderslevKatedralskole = () => {
    return (
    <div className={classes.Logo}>
            <Image 
                width="320px" height="304px"
                src="/images/uddannelser/haderslevl_katedralskole.png" alt="Haderslev Katedralskole Logo" />
    </div>
    )
};

export default HaderslevKatedralskole;
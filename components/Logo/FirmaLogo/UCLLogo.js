import React from 'react';
import Image from 'next/image';

import classes from './SchoolLogos.module.css';

const logo = () => {
    return (
    <div className={classes.Logo}>
            <Image
                width="320px" height="304px"
                src="/images/uddannelser/UCL_horisontal.svg" alt="University College Lillebælt Logo" />
    </div>
    )
};

export default logo;
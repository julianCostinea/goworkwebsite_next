import React from 'react';
import Image from 'next/image';

import classes from './SchoolLogos.module.css';

const logo = (props) => {
    return (
    <div className={classes.Logo}>
            <Image 
                width="320px" height="304px"
                src="/images/skanderborg_gym.svg" alt="Skanderborg Gym Logo" />
    </div>
    )
};

export default logo;
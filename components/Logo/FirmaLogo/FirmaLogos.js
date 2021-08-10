import React from 'react';

import classes from './FirmaLogo.module.css';

import SimplyLogo from './SimplyLogo';
import ValeurLogo from './ValeurLogo';
import RUCLogo from './RUCLogo';
import HNLogo from './HNLogo';
import AALogo from './AALogo';

const logo = () => {
    return (
        <div className={classes.LogoContainer}>
            <div className={classes.splitRow}>
                <AALogo />
                <HNLogo />
            </div>
            <div className={classes.splitRow}>
                <SimplyLogo />
                <ValeurLogo />
            </div>
            <div className={classes.splitRow}>
                <RUCLogo />
            </div>
        </div>
    )
};

export default logo;
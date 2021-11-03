import React from 'react';

import classes from './FirmaLogo.module.css';

import SimplyLogo from './SimplyLogo';
import MicroTechnicLogo from './MicroTechnicLogo';
import RUCLogo from './RUCLogo';
import StenhusLogo from './StenhusLogo';
import SkanderborgLogo from './SkanderborgLogo';
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
                <RUCLogo />

            </div>
            <div className={classes.splitRow}>
                <MicroTechnicLogo />
                <StenhusLogo />
            </div>
            <div className={classes.splitRow}>
                <SkanderborgLogo />
            </div>
        </div>
    )
};

export default logo;
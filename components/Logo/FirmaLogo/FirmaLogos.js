import React from 'react';

import classes from './FirmaLogo.module.css';

import SimplyLogo from './SimplyLogo';
import Roskilde_VUCLogo from './Roskilde_VUCLogo';
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
                <Roskilde_VUCLogo />
            </div>
            <div className={classes.splitRow}>
                <RUCLogo />
                <StenhusLogo />
            </div>
            <div className={classes.splitRow}>
                <SkanderborgLogo />
            </div>
        </div>
    )
};

export default logo;
import React from 'react';

import classes from './SchoolLogos.module.css';

import RUCLogo from './RUCLogo';
import UCLLogo from './UCLLogo';
import StenhusLogo from './StenhusLogo';
import Roskilde_VUCLogo from './Roskilde_VUCLogo';
import SkanderborgLogo from './SkanderborgLogo';

const logo = () => {
    return (
        <div className={classes.LogoContainer}>
            <RUCLogo />
            <SkanderborgLogo />
            <StenhusLogo />
            <Roskilde_VUCLogo />
            <UCLLogo />
        </div>
    )
};

export default logo;
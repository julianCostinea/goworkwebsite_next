import React from 'react';

import classes from './SchoolLogos.module.css';

import RUCLogo from './RUCLogo';
import UCLLogo from './UCLLogo';
import StenhusLogo from './StenhusLogo';
import Roskilde_VUCLogo from './Roskilde_VUCLogo';
import SkanderborgLogo from './SkanderborgLogo';
import HaderslevKatedralskole from './HaderslevKat';
import AarhusKatedralskole from './AarhusKat';

const logo = () => {
    return (
        <div className={classes.LogoContainer}>
            <SkanderborgLogo />
            <HaderslevKatedralskole />
            <StenhusLogo />
            <Roskilde_VUCLogo />
            <UCLLogo />
            <AarhusKatedralskole />
            <RUCLogo />
        </div>
    )
};

export default logo;
import React from 'react';

import Logo from '../../../assets/images/roskilde_VUC.svg';
import classes from './SchoolLogos.module.css';

const logo = () => {
    return (
    <div className={classes.Logo}>
            <img src={Logo} alt="Roskilde VUC Logo" />
    </div>
    )
};

export default logo;
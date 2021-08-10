import React from 'react';


import Logo from '../../../assets/images/stenhus.svg';
import classes from './SchoolLogos.module.css';

const logo = () => {
    return (
    <div className={classes.Logo}>
            <img src={Logo} alt="Stenhus Logo" />
    </div>
    )
};

export default logo;
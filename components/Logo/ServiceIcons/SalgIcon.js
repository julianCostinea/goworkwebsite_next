import React from 'react';

import Icon from '../../../assets/images/Salg.svg';
import classes from './ServiceIcon.module.css';

const logo = (props) => {
    return (
    <div className={classes.Icon}>
            <img src={Icon} alt="Salg Icon" />
            <p style={{marginTop:'0.5rem', fontWeight:'bold'}}>SALG</p>
    </div>
    )
};

export default logo;
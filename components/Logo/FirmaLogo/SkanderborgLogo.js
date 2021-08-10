import React from 'react';

import Logo from '../../../assets/images/skanderborg_gym.svg';
import classes from './SchoolLogos.module.css';

const logo = (props) => {
    let height = '';
    let width = '';
    if (props.height) {
        height = props.height;
    }
    if (props.width) {
        width = props.width;
    }
    return (
    <div className={classes.Logo}>
            <img 
                style={{height : height, width: width}}
                src={Logo} alt="Skanderborg Gym Logo" />
    </div>
    )
};

export default logo;
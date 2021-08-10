import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
    return (
        <button 
            onClick = {props.openKontakt}
            className={classes.Button}>
            START HER
        </button>
    )
};

export default Button;
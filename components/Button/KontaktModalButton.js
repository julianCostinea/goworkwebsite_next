import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
    return (
        <button
            onClick={props.openKontakt}
            className={`${classes.Button} ${props.whiteButton ? classes.whiteButton : null}`}>
            Start her 
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg> */}
        </button>
    )
};

export default Button;
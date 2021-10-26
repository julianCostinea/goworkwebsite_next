import React from 'react';

import classes from './Card.module.css';

const logo = (props) => {
    return (
        <div className={`${classes.CardContainer} ${props.alignLeft ? classes.alignLeft : null}`}>
            {props.children}
        </div>
    )
};

export default logo;
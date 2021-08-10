import React from 'react';

import classes from './BigCard.module.css';

const Container = (props) => {
    return (
        <div className={classes.CardContainer}>
            {props.children}
        </div>
    )
};

export default Container;
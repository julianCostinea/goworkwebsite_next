import React from 'react';

import classes from './ContentImage.module.css'
import Laptop from '../../assets/images/laptop.png';

const laptop = (props) => (
    <div style={{height: props.height}}>
        <img className={classes.Laptop} src={Laptop} alt="Laptop"/>
    </div>
);

export default laptop;
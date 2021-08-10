import React from 'react';
import Link from 'next/link';

import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <Link href='/' onClick = {props.clicked}>
            <img src="/images/NYlogo250px.png" alt="Go:Work ApS" />
        </Link> 
    </div>
);

export default logo;
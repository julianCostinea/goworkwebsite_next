import React from 'react';
import Image from 'next/image';

import classes from './Icon.module.css';


const icon = () => (
    <div className={classes.Icon}>
        <a href="https://www.facebook.com/GoWorkDanmark/" target='_blank' rel="noreferrer">
            <Image width="50px" height="50px" src="/images/facebook.svg" alt="facebook Icon"/>
        </a>
    </div>
);

export default icon;
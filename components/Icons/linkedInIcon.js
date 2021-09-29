import React from 'react';
import Image from 'next/image';

import classes from './Icon.module.css';


const icon = () => (
    <div className={classes.Icon}>
        <a href='https://dk.linkedin.com/company/go-work-aps' target='_blank' rel="noreferrer">
            <Image width="50px" height="50px" src="/images/linkedin.svg" alt="linkedIn Icon"/>
        </a>
    </div>
);

export default icon;
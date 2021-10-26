import React from 'react';
import Image from 'next/image';

import classes from './Icon.module.css';


const icon = () => (
    <div className={classes.Icon}>
        <a href="https://www.instagram.com/goworkaps" target='_blank' rel="noreferrer">
            <Image width="50px" height="50px" src="/images/instagram.svg" alt="instagram Icon"/>
        </a>
    </div>
);

export default icon;
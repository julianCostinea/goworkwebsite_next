import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import classes from './ServiceIcon.module.css';

const logo = () => {
    return (
    <Link href={'virksomheder/okonomi'}>
    <div className={classes.Icon}>
            <Image 
                width= "100px" height="100px"
                src="/images/virksomheder/fagomrader/screen.svg" alt="OKONOMI Icon" />
            <p style={{marginTop:'0.5rem', fontWeight:'bold'}}>HR & ØKONOMI</p>
    </div>
    </Link>
    )
};

export default logo;
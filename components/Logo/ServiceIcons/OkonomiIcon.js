import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import classes from './ServiceIcon.module.css';

const logo = (props) => {
    let linkAddress = '/virksomheder/okonomi';
    if (props.englishVersion) {
        linkAddress = '/en/virksomheder/okonomi'
    }
    return (
        <Link href={linkAddress} passHref>
            <div className={classes.Icon}>
                <Image
                    width="100px" height="100px"
                    src="/images/virksomheder/fagomrader/screen.svg" alt="OKONOMI Icon" />
                <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>
                    {props.englishVersion ? `ECONOMY & FINANCE` : `ØKONOMI & FINANS` }
                </p>
            </div>
        </Link>
    )
};

export default logo;
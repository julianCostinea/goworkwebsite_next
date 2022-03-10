import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import classes from './ServiceIcon.module.css';

const logo = (props) => {
    let linkAddress = '/virksomheder/salg';
    if (props.englishVersion) {
        linkAddress = '/en/virksomheder/salg'
    }
    return (
        <Link href={linkAddress} passHref>
            <div className={classes.Icon}>
                <Image width="100px" height="100px" src="/images/virksomheder/fagomrader/rocket.svg" alt="Kundeservice Icon" />
                <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>
                    {props.englishVersion ? `SALES & COSTUMER SERVICE` : `SALG & KUNDESERVICE` }
                </p>
            </div>
        </Link>
    )
};

export default logo;
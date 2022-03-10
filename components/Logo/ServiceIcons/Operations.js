import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import classes from './ServiceIcon.module.css';

const logo = (props) => {
    let linkAddress = '/virksomheder/lager';
    if (props.englishVersion) {
        linkAddress = '/en/virksomheder/lager'
    }
    return (
        <Link href={linkAddress} passHref>
            <div className={classes.Icon}>
                <Image
                    width="100px" height="100px"
                    src="/images/virksomheder/fagomrader/wheels.svg" alt="OPERATIONS Icon" />
                <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>
                    {props.englishVersion ? `WAREHOUSE & PRODUCTION` : `LAGER & PRODUKTION`}
                </p>
            </div>
        </Link>
    )
};

export default logo;
import React from 'react';
import Image from 'next/image';

import classes from './FirmaLogo.module.css';

const logo = () => {
    return (
    <div className={classes.Logo}>
            <Image
                width= "100px" height="100px"
                src="/images/valeuer_logo.svg" alt="Valeur Logo" />
    </div>
    )
};

export default logo;
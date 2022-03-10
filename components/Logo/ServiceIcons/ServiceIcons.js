import React from 'react';

import classes from './ServiceIcon.module.css';

import Okonomi from './OkonomiIcon';
import Digital from './DigitalIcon';
import Kundeservice from './Kundeservice';
import Operations from './Operations';

const logo = (props) => {
    if (props.englishVersion) {
        return (
            <div className={classes.IconContainer}>
                <Kundeservice englishVersion/>
                <Digital englishVersion/>
                <Okonomi englishVersion/>
                <Operations englishVersion/>
            </div>
        )
    }
    return (
        <div className={classes.IconContainer}>
            <Kundeservice />
            <Digital />
            <Okonomi />
            <Operations />
        </div>
    )
};

export default logo;
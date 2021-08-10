import React, { useState } from 'react';

import SabbatarPhoto from '../../../assets/images/stillinger/stillinger-sabataar.svg';

import classes from './BigCardImage.module.css'

const BigCardPhoto = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={SabbatarPhoto} alt="Studerende"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}


export default BigCardPhoto;
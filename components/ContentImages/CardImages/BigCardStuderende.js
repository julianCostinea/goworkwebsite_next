import React, { useState } from 'react';

import StuderendePhoto from '../../../assets/images/stillinger/stillinger-studerende_v3.svg';

import classes from './CardImage.module.css'

const BigCardPhoto = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={StuderendePhoto} alt="Studerende"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}


export default BigCardPhoto;
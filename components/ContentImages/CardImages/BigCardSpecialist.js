import React, { useState } from 'react';

import SpecialistPhoto from '../../../assets/images/stillinger/stillinger-specialist_v2.svg';

import classes from './CardImage.module.css'

const BigCardPhoto = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={SpecialistPhoto} alt="Studerende"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}


export default BigCardPhoto;
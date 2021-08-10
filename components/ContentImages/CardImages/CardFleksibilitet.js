import React, { useState } from 'react';

import AttitudePhoto from '../../../assets/images/FLEKSIBILITET.png';

import classes from './CardImage.module.css'

const CardPhoto = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            style={loaded ? {} : { display: 'none' }} 
            src={AttitudePhoto} alt="Fleksibilitet"
            onLoad={() => setLoaded(true)}
            />
    </div>
);}


export default CardPhoto;
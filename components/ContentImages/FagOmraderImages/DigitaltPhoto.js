import React, { useState } from 'react';

import classes from './FagOmrade.module.css'
import DigitaltImage from '../../../assets/images/Fagomrader/Digitalt.png';

const DigitaltImg = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            className={classes.Laptop}
            style={loaded ? {} : { display: 'none' }} 
            src={DigitaltImage} alt="Digitalt"
            onLoad={() => setLoaded(true)}
            />
    </div>
    );
}

export default DigitaltImg;
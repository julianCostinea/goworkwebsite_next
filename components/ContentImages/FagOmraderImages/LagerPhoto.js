import React, { useState } from 'react';

import classes from './FagOmrade.module.css'
import LagerImage from '../../../assets/images/Fagomrader/Lager.png';

const LagerImg = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            className={classes.Laptop}
            style={loaded ? {} : { display: 'none' }} 
            src={LagerImage} alt="Lager"
            onLoad={() => setLoaded(true)}
            />
    </div>
    );
}

export default LagerImg;
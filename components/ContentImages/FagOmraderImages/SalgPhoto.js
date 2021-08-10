import React, { useState } from 'react';

import classes from './FagOmrade.module.css'
import SalgImage from '../../../assets/images/Fagomrader/Salg.png';

const SalgImg = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            className={classes.Laptop}
            style={loaded ? {} : { display: 'none' }} 
            src={SalgImage} alt="Salg"
            onLoad={() => setLoaded(true)}
            />
    </div>
    );
}

export default SalgImg;
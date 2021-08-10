import React, { useState } from 'react';

import classes from './FagOmrade.module.css'
import OkonomiImage from '../../../assets/images/Fagomrader/Okonomi.png';

const OkonomiImg = () => {
    const [loaded, setLoaded] = useState(false);
    return (
    <div className={classes.CardPhoto}>
        <img 
            className={classes.Laptop}
            style={loaded ? {} : { display: 'none' }} 
            src={OkonomiImage} alt="Okonomi"
            onLoad={() => setLoaded(true)}
            />
    </div>
    );
}

export default OkonomiImg;
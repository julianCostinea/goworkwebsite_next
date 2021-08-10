import React from 'react';

import classes from './ContentImage.module.css'
import UddannelserImage from '../../assets/images/uddannelser_image.png';

const UddannelserImg = (props) => (
    <div style={{height: props.height}}>
        <img className={classes.Laptop} src={UddannelserImage} alt="Uddannelser"/>
    </div>
);

export default UddannelserImg;
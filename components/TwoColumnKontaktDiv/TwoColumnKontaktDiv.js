import React from 'react';

import classes from './TwoColumnKontaktDiv.module.css';

const TwoColumnKontaktDiv = (props) => {
    return(
    <div className={classes.Container}>
        <div className={classes.cols2}>
            <div>
                {props.leftDiv}
            </div>
            <div>
                {props.rightDiv}
            </div>
        </div>
    </div>
    )
};

export default TwoColumnKontaktDiv;
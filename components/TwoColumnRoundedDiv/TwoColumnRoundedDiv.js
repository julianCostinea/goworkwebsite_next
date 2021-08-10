import React from 'react';

import classes from './TwoColumnRoundedDiv.module.css';

const TwoColumnRoundedDiv = (props) => {
    let attachedClasses = [classes.Container];
    if (props.floatLeft) {
        attachedClasses = [classes.Container, classes.ReverseContainer];
    }

    const formattedHeader = props.header.split('\n').map((str, index) => <h1 key={index}>{str}</h1>);
    return(
    <div className={attachedClasses.join(' ')}>
        <div className={classes.TextDiv}>
            <div className={classes.Header}>
                {formattedHeader}
            </div>
            <div className={classes.Paragraph}>
                <p>{props.children}</p>
            </div> 
        </div>
        <div className={classes.ImageDiv}>
            {props.imageDiv}
        </div>
    </div>
    )
};

export default TwoColumnRoundedDiv;
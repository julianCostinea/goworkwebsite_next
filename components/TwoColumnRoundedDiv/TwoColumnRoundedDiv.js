import React from 'react';

import classes from './TwoColumnRoundedDiv.module.css';

const TwoColumnRoundedDiv = (props) => {
    let attachedClasses = [classes.Container];
    if (props.ReverseContainer) {
        attachedClasses.push(classes.ReverseContainer);
    }
    if (props.lightBlueDiv) {
        attachedClasses.push(classes.lightBlueDiv);
    }

    const formattedHeader = props.header.split('\n').map((str, index) => <h1 className={classes.Header__h1} key={index}>{str}</h1>);
    return(
    <div className={attachedClasses.join(' ')}>
        <div className={classes.ImageDiv}>
            {props.imageDiv}
        </div>
        <div className={classes.TextDiv}>
            <div className={classes.Header}>
                {formattedHeader}
            </div>
            <div className={classes.Paragraph}>
                <p className={classes.Paragraph__p}>{props.children}</p>
            </div> 
        </div>
    </div>
    )
};

export default TwoColumnRoundedDiv;
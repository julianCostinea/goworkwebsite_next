import React from 'react';

import classes from './OneColumnDiv.module.css';

const OneColumnDiv = (props) => {
    let formattedParagraph = '';
    if (props.paragraph) {
        formattedParagraph = props.paragraph.split('\n').map((str, index) => <p key={index}>{str}<br/></p>);
    }
    let attachedClasses = [classes.Container];
    if (props.whiteDiv) {
        attachedClasses = [classes.Container, classes.White];
    }
    if (props.lightBlueDiv) {
        attachedClasses = [classes.Container, classes.lightBlueDiv];
    }
    return (
    <div className={attachedClasses.join(' ')}>
        <div>
            {props.overParagraph ? <p>{props.overParagraph}</p> : null}
            <h4 className={ props.bigHeader ? classes.bigHeader : {}}>
                {props.header}
            </h4>
            {props.firmaHeader ? <h3>{props.firmaHeader}</h3> : null}
        </div>
        {props.secondHeader ? <h4>{props.secondHeader}</h4> : null}
        <div className={classes.Paragraph}>
            {formattedParagraph}
        </div>
        <div className={classes.Children}>
            {props.children}
        </div>
    </div>
    );
}

export default OneColumnDiv;
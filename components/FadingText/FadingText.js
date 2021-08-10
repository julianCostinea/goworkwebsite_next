import React, { useState } from 'react';

import classes from './FadingText.module.css';

const FadingText = (props) => {
    const [expandBody, setExpandBody] = useState(false);
    const formattedHiddenText = props.hiddenText.split('\n').map((str, index) => <p key={index}>{str}</p>);

    let attachedClasses = [classes.Card];

    if (props.alignRight) {
        attachedClasses = [classes.Card, classes.alignRight];
    }

    return (
        <div className={attachedClasses.join(' ')}>
            <h2>{props.cardTitle}</h2>
            <div
                className={classes.Body}            >
                <h3>{props.cardHeader}</h3>
                {props.children}
                <div className={classes.HiddenText}
                    style={expandBody ? { opacity: '1', transition: 'opacity 0.5s ease-in' } : { opacity: '0', transition: 'opacity 0.5s ease-out' }}>
                    {formattedHiddenText}
                </div>

            </div>
            <div className={classes.ButtonDiv} style={{position: 'relative'}}>
                <button
                    style={expandBody ? {position:'relative', top: 0, left: '0px', transition: 'all 0.3s linear'} : {position: 'absolute', top: '-170px', transition: 'all 0.3s linear'} }
                    className={classes.CardButton}
                    onClick={() => { setExpandBody(!expandBody) }}>
                    Læs {expandBody ? 'mindre' : 'mere'}
                </button>
            </div>
        </div>
    );
}

export default FadingText;
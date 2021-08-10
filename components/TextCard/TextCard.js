import React from 'react';

import classes from './TextCard.module.css';

const TextCard = (props) => {
    const formattedCardBody = props.cardBody.split(',').map((str, index) => <li key={index}>{str}</li>);
    const formattedCardHeader = props.cardHeader.split('\n').map((str, index) => <h2 key={index}>{str}</h2>);
    return ( 
        <div className={classes.Card}>
            <div className={classes.Header}>
                {formattedCardHeader}
            </div>
            <div className={classes.Body}>
                <ul>
                    {formattedCardBody}
                </ul>
            </div>
        </div>        
    );
}
 
export default TextCard;
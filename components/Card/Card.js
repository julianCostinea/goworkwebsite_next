import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
    let attachedClasses = [classes.Body];

    if (props.pink) {
        attachedClasses = [classes.Body, classes.Pink];
    }
    if (props.orange) {
        attachedClasses = [classes.Body, classes.Orange];
    }
    const formattedCardBody = props.cardBody.split('\n').map((str, index) => <p key={index}>{str}</p>);
    return ( 
        <div className={classes.Card}>
            <div className={classes.Header}>
                {props.cardPhoto ? props.cardPhoto  : 'BILLEDE'}
            </div>
            <div className={attachedClasses.join(' ')}>
                <h5 style={{color: '#2a5c91', marginBottom:'0.5rem'}}>{props.cardHeader}</h5>
                {formattedCardBody}
            </div>
        </div>        
    );
}
 
export default Card;
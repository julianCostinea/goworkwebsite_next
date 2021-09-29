import React from 'react';

import classes from './Card.module.css';

const TeamCard = (props) => {
    let attachedClasses = [classes.Body];

    const formattedCardBody = props.cardBody.split('\n').map((str, index) => <p key={index}>{str}</p>);
    return ( 
        <div className={classes.TeamCard}>
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
 
export default TeamCard;
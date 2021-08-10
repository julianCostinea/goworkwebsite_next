import React, { useState } from 'react';

import classes from './BigCard.module.css';

const BigCard = (props) => {
    const [expandBody, setExpandBody] = useState(false);
    const formattedCardBody = props.cardBody.split('\n').map((str, index) => <p key={index}>{str}</p>);
    const formattedHiddenText = props.hiddenText.split('\n').map((str, index) => <p key={index}><br />{str}</p>);

    return ( 
        <div className={classes.Card}>
            <h1>{props.cardTitle}</h1>
            <div className={classes.Header}>
                {props.cardPhoto ? props.cardPhoto  : 'BILLEDE'}
            </div>
            <div 
                className={classes.Body}
                style={expandBody ? {height: props.cardHeight} : {height: '16rem'} }
            >
                <h3>{props.cardHeader}</h3>
                    {formattedCardBody}
                <div  className = {classes.HidenText}
                    style={expandBody ? {opacity: '1', transition: 'opacity 0.7s'} : {opacity: '0', transition: 'opacity 0.3s'} }>
                    {formattedHiddenText}
                </div>
                
            </div>
            <div className={classes.ButtonDiv}>
                <button 
                    className = {classes.CardButton}
                    onClick={()=>{setExpandBody(!expandBody)}}>
                        Læs {expandBody ? 'mindre' : 'mere'}
                </button>
            </div>
        </div>        
    );
}
 
export default BigCard;
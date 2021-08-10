import React from 'react';

import classes from './QuoteDiv.module.css';


const QuoteDiv = (props) => {
    return (
    <div className={classes.Container}>
        <div>
            <h4>{props.header}</h4>
            <div style={{margin:'1rem', fontSize:'1.2rem'}}>
                <div className={classes.quote}>{props.children}</div>
                <div className = {classes.text}>
                    <h2>{props.author}</h2>
                    <p>{props.firma}</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default QuoteDiv;
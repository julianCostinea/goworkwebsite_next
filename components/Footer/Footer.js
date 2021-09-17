import React from 'react';

import classes from './Footer.module.css';
import FacebookIcon from '../Icons/facebookIcon';
import LinkedInIcon from '../Icons/linkedInIcon';

const footer = () => {
    return ( 
        <div className={classes.Footer}>
            <div>
                <ul className={classes.List}>
                    <h3>GoWork</h3>
                    <li style={{lineHeight : '1.5rem'}}>GoWork er et vikarbureau med flere
                        gazellepriser.<br/> Vi har siden 2012 formidlet 
                        ambitiøse mennesker <br/>i starten af deres karriere til
                        midlertidige opgaver. </li>
                    <li style={{fontWeight: 'bold'}}>
                        Er din virksomhed klar til at Go Work?
                    </li>
                </ul>
            </div>
            <div>
                <ul className={classes.List}>
                    <h3>GoWork ApS</h3>
                    <li style={{lineHeight : '1.5rem'}}>Fjordsgade 11, 1. sal <br/>
                    5000 Odense C. <br />
                    Tlf.: 6610 6500 <br/>
                    </li>
                    Følg os:
                    <FacebookIcon/>
                    <LinkedInIcon/>
                </ul>
            </div>
        </div>
     );
}
 
export default footer;
import React from 'react';

import classes from './Footer.module.css';
import FacebookIcon from '../Icons/facebookIcon';
import LinkedInIcon from '../Icons/linkedInIcon';
import InstagramIcon from '../Icons/instagramIcon';

const footer = () => {
    return (
        <React.Fragment>
        <footer className={classes.Footer}>
            <div className={classes.Aligned}>
                <ul className={classes.List}>
                    <h3>GoWork</h3>
                    <li style={{ lineHeight: '1.5rem' }}>GoWork er et vikar- og specialistbureau med flere
                        gazellepriser. Vi har siden 2012 formidlet ambitiøse
                        mennesker i starten af deres karriere til midlertidige jobs. </li>
                    <li style={{ fontWeight: 'bold' }}>
                        Er din virksomhed klar til at Go Work?
                    </li>
                </ul>
            </div>
            <div>
                <ul className={classes.List}>
                    <h3>GoWork ApS</h3>
                    <li style={{ lineHeight: '1.5rem' }}>Fjordsgade 11, 1. sal <br />
                        5000 Odense C. <br />
                        Tlf.: 6610 6500 <br />
                    </li>
                    <FacebookIcon />
                    <LinkedInIcon />
                    <InstagramIcon />
                </ul>
            </div>
        </footer>
        </React.Fragment>
    );
}

export default footer;
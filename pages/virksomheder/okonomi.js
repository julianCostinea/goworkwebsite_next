import React, {Component} from 'react';

import TwoColumnDiv from '../../components/TwoColumnDiv/TwoColumnDiv';
import OkonomiPhoto from '../../components/ContentImages/FagOmraderImages/OkonomiPhoto';
import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import KontaktForm from '../../components/KontaktForm/KontaktForm';

import classes from './ServicePage.module.css';

class Okonomi extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className={classes.Content}>
                    <TwoColumnDiv
                        imageDiv = {<OkonomiPhoto />}
                        header = {'HR & ØKONOMI'}>
                   Lej et HR- eller økonomitalent!<br/><br/>
                   Mangler i en controller, en BI specialist, en HR-partner eller andre <br/>
                   slags dygtige og pålidelige medarbejdere der kan<br/>
                   håndtere økonomi- og HR-opgaver?<br/>
                   Så kan vi hos GoWork finde dem til jer.<br/>
                   Med vores brede netværk af dygtige kandidater indenfor økonomi<br/>
                   og HR kan i trygt overlade ansættelsesprocessen til os.<br/>
                   Vi udvælger og screener de helt rette kandidater til midlertidige<br/>
                   og midlertidige-til-permanente opgaver, så din virksomhed <br/>
                   kan få styrket sin online tilstedeværelse.
                    </TwoColumnDiv>
                    <OneColumnDiv 
                        header = {'Eksempler på stillinger/opgaver vi løser'}>
                        <div className = {classes.List}>
                            <ul>
                                <li>Controller</li>
                                <li>Analyse</li>
                                <li>BI (Business Intelligence) </li>
                                <li>HR-koordinator</li>
                            </ul>
                            <ul>
                                <li>HR partnere</li>
                                <li>Løn- og HR assistent</li>
                                <li>Debitor-, kreditor og finansbogholderi</li>
                            </ul>
                        </div>
                    </OneColumnDiv>
                </div>
                <KontaktForm />
            </React.Fragment>
         );
    }
}
 
export default Okonomi;
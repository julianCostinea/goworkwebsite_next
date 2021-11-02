import React, { Component } from 'react';
import Head from 'next/head';

import TwoColumnDiv from '../../components/TwoColumnDiv/TwoColumnDiv';
import OkonomiPhoto from '../../components/ContentImages/FagOmraderImages/OkonomiPhoto';
import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import KontaktForm from '../../components/KontaktForm/KontaktForm';

import classes from './ServicePage.module.css';

class Okonomi extends Component {
    render() {
        let pageDescription = "Lej et økonomitalent. Med vores brede netværk af kandidater indenfor økonomi og finans kan i trygt overlade opgaven til os";
        let pageTitle = "Virksomheder | Økonomi";
        return (
            <React.Fragment>
                <Head>
                    <title>{pageTitle}</title>
                    <meta name="description" content={pageDescription} />
                    <meta property="og:title" content={pageTitle} />
                    <meta property="og:description" content={pageDescription}/>
                    <meta name="twitter:title" content={pageTitle}/>
                    <meta name="twitter:description" content={{pageDescription}} />
                </Head>
                <div className={classes.Content}>
                    <TwoColumnDiv
                        smallIconReverse
                        imageDiv={<OkonomiPhoto />}
                        header={`Økonomi &\n Finans`}>
                        Lej et økonomitalent!<br /><br />
                        Mangler i en Controller, en Lønspecialist, en Business Analyst
                        eller andre kompetente og pålidelige medarbejdere der kan
                        håndtere økonomi- og finansopgaver?<br /><br />
                        Så kan vi hos GoWork finde dem til jer.<br /><br />
                        Med vores brede netværk af kandidater indenfor økonomi
                        og finans kan i trygt overlade opgaven til os.<br /><br />
                        Vi udvælger de helt rette kandidater til midlertidige
                        og midlertidige-til-permanente opgaver.
                    </TwoColumnDiv>
                    <OneColumnDiv
                        header={'Eksempler på stillinger/opgaver vi løser'}>
                        <div className={classes.List}>
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
import React, { Component } from 'react';
import Head from 'next/head';

import TwoColumnDiv from '../../components/TwoColumnDiv/TwoColumnDiv';
import DigitaltPhoto from '../../components/ContentImages/FagOmraderImages/DigitaltPhoto';
import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import KontaktForm from '../../components/KontaktForm/KontaktForm';

import classes from './ServicePage.module.css';

class Digitalt extends Component {
    render() {
        let pageDescription = "Lej et digitalt eller kreativt talent. Vi finder de helt rigtige kandidater, så din virksomhed kan få styrket sin online tilstedeværelse";
        let pageTitle = "Virksomheder | Digitalt";
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
                        imageDiv={<DigitaltPhoto />}
                        header={'Digitalt & Kreativt'}>
                        Lej et digitalt eller kreativt talent! <br/><br/>
                        Generation Y og Z er specielle, fordi de er digitalt indfødte.
                        Det skaber nogle oplagte muligheder - en digital generation
                        til digitale opgaver! <br /><br />
                        GoWork har adgang til en store pulje af digitale og
                        kreative talenter der findes blandt landets studerende og
                        specialist/freelance-community.<br /><br />
                        Vi udvælger og screener de helt rette kandidater til midlertidige
                        og midlertidige-til-permanente opgaver, så din virksomhed
                        kan få styrket sin online tilstedeværelse.
                    </TwoColumnDiv>
                    <OneColumnDiv
                        header={'Eksempler på de stillinger/opgaver vi løser'}>
                        <div className={classes.List}>
                            <ul>
                                <li>UX/UI designer</li>
                                <li>Webdesigner</li>
                                <li>Visual designer</li>
                                <li>Grafisk designer</li>
                                <li>Digital marketing specialist</li>
                            </ul>
                            <ul>
                                <li>Email Marketing</li>
                                <li>Tekstforfattere</li>
                                <li>Content Developer</li>
                                <li>Marketing Coordinator</li>
                                <li>Programming</li>
                            </ul>
                        </div>
                    </OneColumnDiv>
                </div>
                <KontaktForm />
            </React.Fragment>
        );
    }
}

export default Digitalt;
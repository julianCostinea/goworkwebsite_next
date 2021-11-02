import React, { Component } from 'react';
import Head from 'next/head';

import TwoColumnDiv from '../../components/TwoColumnDiv/TwoColumnDiv';
import SalgPhoto from '../../components/ContentImages/FagOmraderImages/SalgPhoto';
import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import KontaktForm from '../../components/KontaktForm/KontaktForm';
import MobileOnlyDash from '../../util/MobileOnlyDash';

import classes from './ServicePage.module.css';

class Salg extends Component {
    render() {
        let pageDescription = "Lej et salgs- eller kundeservicetalent. Vi finder de helt rigtige talenter til midlertidige og midlertidige-til-permanente opgaver";
        let pageTitle = "Virksomheder | Salg";
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
                        imageDiv={<SalgPhoto />}
                        header={'Salg &\n Kundeservice'}>
                        Lej et salgs- eller kundeservicetalent!<br /><br />
                        Kundeservicemedarbejdere, og jeres salgsteam,
                        repræsenterer jeres virksomhed udadtil.
                        Derfor er det vigtigt at finde de helt rigtige
                        personer til at varetage opgaverne.<br /> <br />
                        Salgstalenter og kundeservicemedarbejdere 
                        kan være svære at finde, da disse opgaver ikke bare kræver
                        faglige kompetencer, men også personlige egenskaber
                        som vedholdenhed, empati og indlevelse.<br /><br />
                        Vores team finder de helt rigtige talenter til midlertidige
                        og midlertidige-til-permanente opgaver.
                    </TwoColumnDiv>
                    <OneColumnDiv
                        header={'Eksempler på de stillinger/opgaver vi løser'}>
                        <div className={classes.List}>
                            <ul>
                                <li>Telefoninterviewer</li>
                                <li>Mødebooker</li>
                                <li>Phoner</li>
                                <li>Salgskonsulent</li>
                            </ul>
                            <ul>
                                <li>Kundeservice<MobileOnlyDash />medarbejder</li>
                                <li>SoMe supporter</li>
                                <li>Teknisk supporter</li>
                                <li>Cell center medarbejder</li>
                            </ul>
                        </div>
                    </OneColumnDiv>
                </div>
                <KontaktForm />
            </React.Fragment>
        );
    }
}

export default Salg;
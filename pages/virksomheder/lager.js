import React, {Component} from 'react';
import Head from 'next/head';

import TwoColumnDiv from '../../components/TwoColumnDiv/TwoColumnDiv';
import LagerPhoto from '../../components/ContentImages/FagOmraderImages/LagerPhoto';
import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import KontaktForm from '../../components/KontaktForm/KontaktForm';

import classes from './ServicePage.module.css';

class Okonomi extends Component {
    render() { 
        let pageDescription = "Lej friske vikarer til dit lager eller produktion. Høj leveringssikkerhed og højere fleksibilitet.";
        let pageTitle = "Virksomheder | Lager";
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
                        imageDiv = {<LagerPhoto />}
                        header = {'Lager &\n Produktion'}>
                   Lej friske vikarer til dit lager eller produktion! <br/><br/>
                   Lager og produktion er en vigtig opgave,
                   som skal varetages af kvalificerede og mødestabile
                   ansatte. <br /><br/>
                   Vores team finder hurtigt de helt rigtige
                   lager- og produktionsvikarer, så i kan komme 
                   sikkert i mål med dagens opgaver, og bruge tiden 
                   på det i er bedst til.<br/>
                    </TwoColumnDiv>
                    <OneColumnDiv 
                        header = {'Eksempler på de stillinger/opgaver vi løser'}>
                        <div className = {classes.List}>
                            <ul>
                                <li>Webshop-lager</li>
                                <li>Etikettering</li>
                                <li>Forsendelse</li>
                                <li>Plukke/Pakke medarbejdere</li>
                            </ul>
                            <ul>
                                <li>Montage</li>
                                <li>Kvalitetstjek</li>
                                <li>Varemodtagelse</li>
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
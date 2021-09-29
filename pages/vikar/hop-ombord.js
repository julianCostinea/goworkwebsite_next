import React, { Component } from 'react';

import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import CardContainer from '../../components/Card/CardContainer';
import TextCard from '../../components/TextCard/TextCard';
import ApplicationProcess from '../../components/ContentImages/ApplicationProcess/ApplicationProcess';

import classes from './HopOmbord.module.css';

class HopOmbord extends Component {
    render() {
        return (
            <div>
                <div className={classes.Content}>
                    {/* !!! Sabbatår, Studerende, Specialist Cards !!!  */}
                    {/* <TwoColumnRoundedDiv
                        header={'Sabbatår'}
                        imageDiv={<BigCardSabbatar />}
                    >
                        <strong>SKAL DIT SABBATÅR TÆLLE FOR NOGET?</strong><br /><br />
                        Skal dit sabbatår bruges på at tjene dine egne penge..? Så kan du jo
                        få råd til din egen lejlighed når du starter på studiet. <br />Eller måske skal
                        du bruge pengene på at få krydset eventyrrejsen af bucket-listen
                        før dit studieliv begynder?
                        Vikarjobs giver typisk en god timeløn. Og så er det fleksibelt! <br /><br />
                        Vi finder vikarjobs til mennesker på sabbatår indenfor følgende områder:
                        <ul>
                            <li>Lager og produktion </li>
                            <li>Salg og kundeservice </li>
                            <li>Digitale medier </li>
                            <li>M.fl.</li>
                        </ul>

                        Vi vil meget gerne have dig om bord i vores team af friske vikarer, <br />
                        der lige som dig ønsker at tjene penge og få noget ud af sabbatåret. <br />
                        Så hvis du er klar, se ledige vikarjobs eller opret dit CV – vi glæder os til at høre fra dig!
                    </TwoColumnRoundedDiv>
                    <TwoColumnRoundedDiv
                        floatLeft
                        header={'Studerende'}
                        imageDiv={<BigCardStuderende />}
                    >
                        <strong>ØNSKER DU ET FLEKSIBELT ARBEJDE DER IKKE KOMMER I VEJEN FOR DINE STUDIER?</strong> <br /><br />
                        Med et vikarjob eller et studiejob kan du tjene penge til økonomisk luft i hverdagen,
                        samtidigt med at du styrker dit CV – uden at jobbet kommer i vejen for dine studier.
                        Vi forstår at studiet har din førsteprioritet. Derfor formidler vi studiejobs og vikarjobs der passer ind i hverdagen som studerende. <br /><br />
                        Med et vikarjob kan du få arbejde der:
                        <ul>
                            <li>Ikke ligger samtidigt med dine forelæsninger</li>
                            <li>Giver dig mulighed for at holde fri i eksamensperioder</li>
                            <li>Giver erhvervserfaring på dit CV, hvilket styrker din profil som jobsøgende når du er færdig med dit studie</li>
                        </ul>
                        Vi finder vikarjobs til mennesker på sabbatår indenfor følgende områder:
                        <ul>
                            <li>Lager og produktion</li>
                            <li>Salg og kundeservice</li>
                            <li>Digitale medier</li>
                            <li>M.fl. </li>
                        </ul>
                        Hvis du er klar til et nyt og spændende studiejob, så se ledige vikarjobs eller opret dit CV – vi glæder os til at høre fra dig!
                    </TwoColumnRoundedDiv>
                    <TwoColumnRoundedDiv
                        header={'Specialist'}
                        imageDiv={<BigCardSpecialist />}
                    >
                        <strong>SØGER DU ET FRIT ARBEJDSLIV MED OPGAVER DU BRÆNDER FOR?</strong> <br /><br />
                        Er du i starten af din karriere, har et særligt talent inden for eksempelvis grafisk design, digital marketing eller økonomi,
                        og har du overvejet at gå efter freelanceopgaver frem for en fast stilling? Hvis ikke, så bør du! Læs her hvorfor:<br /><br />
                        Frem for at låse dig fast på én virksomhed fra starten kan du som vikar:<br />
                        <ul>
                            <li>Styrke din faglighed og dit erfaringsniveau ved at lave opgaver for forskellige typer af klienter i varierende brancher</li>

                            <li>Hurtigt blive klogere på dine egne styrker, hvilken branche og hvilke specialistopgaver du i dit professionelle liv skal satse på, ved at prøve mange opgaver af i starten af din karriere</li>
                            <li>Udbygge dit professionelle netværk ved at få kontakter i flere forskellige virksomheder</li> <br />
                        </ul>
                        Vi varetager alt det administrative, herunder fakturering af klienten og afregningen mellem os og dig, så du kan bruge tiden på det du er bedst til. <br /><br />
                        Hvis du er klar på at kickstarte din vikar specialist-karriere, , udvide dit netværk og få en masse erfaring indenfor dit speciale på dit CV, så kom i gang nu ved at oprette dit CV.
                    </TwoColumnRoundedDiv> */}
                    <OneColumnDiv
                        whiteDiv
                        header={'Ansøgningsproces'}
                        // paragraph={`Vi er stolte af vores mange glade kunder, som rater vores kandidater 4.5 ud af 5.0 stjerner. Du får med
                        // vores hjælp sikkerhed for, at du passer godt til de opgaver vi tilbyder dig. Vi sørger også for at den 
                        // virksomhed du får tilbudt arbejde i, passer til dine ønsker. \n\nDet er nemlig kun et godt match hvis både 
                        // virksomheden og den ansatte er glade for hinanden - og det er vores mål!`}
                        paragraph={`Vi brænder for at bringe ambitiøse mennesker og virksomheder sammen.
                        Her er en kort beskrivelse af en standard ansættelsesproces:`}
                    >
                        <div>
                            {/* <h2
                                style={{ color: '#2a5c91', marginTop: '2rem', fontSize: '1.5rem' }}
                            ></h2> */}
                            <ApplicationProcess />
                        </div>
                    </OneColumnDiv>
                    <OneColumnDiv
                        lightBlueDiv
                        header={'Fagområder'}
                        paragraph={`Vi har et særligt fokus på midlertidige jobs indenfor salg, det digitale og kreative, kundeservice,
                      operations, eksamentilsyn, økonomi og administration. Her er et overblik over nogle af de
                      stillinger / opgaver vi løser:`}
                    >
                        <CardContainer>
                            <TextCard
                                cardHeader={`Salg & Kundeservice:`}
                                cardBody={'telefoninterviewer, mødebooker, phoner, salgskonsulent, sælger, kundeservicemedarbejder, call center medarbejder og kunderådgiver, m.fl.'}
                            />
                            <TextCard
                                cardHeader={'Digitalt & Kreativt'}
                                cardBody={'webdesigner, grafisk designer, digital marketing specialist, content developer, marketing koordinator, email marketing, UX/UI designer og programmering, m.fl.'}
                            />
                            <TextCard
                                cardHeader={'Lager & Produktion'}
                                cardBody={'webshop lager, pluk/pak, forsendelse, varemodtagelse, etikettering, montage og kvalitetstjek, m.fl.'}
                            />
                            <TextCard
                                cardHeader={'Økonomi & Finans'}
                                cardBody={'bogholder, controller, business analyst, lønspecialist, montage og kvalitetstjek, m.fl.'}
                            />
                        </CardContainer>
                    </OneColumnDiv>
                </div>
            </div>
        );
    }
}

export default HopOmbord;
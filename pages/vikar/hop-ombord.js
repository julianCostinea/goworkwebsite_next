import React, { Component } from 'react';

import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import CardContainer from '../../components/Card/CardContainer';
import TextCard from '../../components/TextCard/TextCard';
import BigCardStuderende from '../../components/ContentImages/CardImages/BigCardStuderende';
import BigCardSabbatar from '../../components/ContentImages/CardImages/BigCardSabbatar';
import BigCardSpecialist from '../../components/ContentImages/CardImages/BigCardSpecialist';
import ApplicationProcess from '../../components/ContentImages/ApplicationProcess/ApplicationProcess';
import TwoColumnRoundedDiv from '../../components/TwoColumnRoundedDiv/TwoColumnRoundedDiv';

import classes from './HopOmbord.module.css';

class HopOmbord extends Component {
    render() {
        return (
            <div>
                <div className={classes.Content}>
                    <TwoColumnRoundedDiv
                        header={'Sabbatår'}
                        imageDiv={<BigCardSabbatar />}
                    >Skal dit sabbatår bruges på at tjene dine egne penge..? Så kan du jo
                    få råd til din egen lejlighed når du starter på studiet. <br />Eller måske skal
                    du bruge pengene på at få krydset eventyrrejsen af bucket-listen
                    før dit studieliv begynder? 
                    Vikarjobs giver typisk en god timeløn. Og så er det fleksibelt! <br />
                            Vi finder vikarjobs til mennesker på sabbatår indenfor følgende brancher: <br />
                            -	Lager og produktion <br />
                            -	Salg og kundeservice <br />
                            -	Digitale medier <br />
                            -	M.fl. <br />
                            
                            Vi vil meget gerne have dig om bord i vores team af friske vikarer, <br />
                            der lige som dig ønsker at tjene penge og få noget ud af sabbatåret. <br />
                            Så hvis du er klar, opret dit CV herunder – vi glæder os til at høre fra dig!
                    </TwoColumnRoundedDiv>
                    <TwoColumnRoundedDiv
                        floatLeft
                        header={'Studerende'}
                        imageDiv={<BigCardStuderende />}
                    >Med et vikarjob eller et studiejob kan du tjene penge til økonomisk luft i hverdagen, 
                    samtidigt med at du styrker dit CV – uden at jobbet kommer i vejen for dine studier.
                    Vi forstår at studiet har din førsteprioritet. Derfor formidler vi studiejobs og vikarjobs der passer ind i hverdagen som studerende. 
                        Med et studiejob eller vikarjob kan du få arbejde der: 
                        -	Ikke ligger samtidigt med dine forelæsninger
                        -	Giver dig mulighed for at holde fri i eksamensperioder 
                        -	Giver erhvervserfaring på dit CV, hvilket styrker din profil som jobsøgende når du er færdig med dit studie 
                        Vi finder gode arbejdspladser til studerende indenfor følgende brancher: 
                        -	Lager og produktion
                        -	Salg og kundeservice 
                        -	Digitale medier
                        Hvis du er klar til et nyt og spændende studiejob, så klik på knappen herunder og kom i gang med at oprette dit CV!
                    </TwoColumnRoundedDiv>
                    <TwoColumnRoundedDiv
                        header={'Specialist'}
                        imageDiv={<BigCardSpecialist />}
                    >Er du i starten af din karriere, og har du overvejet at gå efter freelanceopgaver frem for en fast stilling? Hvis ikke, så bør du! Læs her hvorfor:
                    Frem for at låse dig fast på én virksomhed fra starten kan du med freelanceopgaver:
                        -	Styrke din faglighed og dit erfaringsniveau ved at lave opgaver for forskellige typer af klienter i varierende brancher 
                        -	Hurtigt blive klogere på dine egne styrker, hvilken branche og hvilke specialistopgaver du i dit professionelle liv skal satse på, ved at prøve mange opgaver af i starten af din karriere
                        -	Udbygge dit professionelle netværk ved at få kontakter i flere forskellige virksomheder   
                        -	Vi varetager alt det administrative, herunder fakturering af klienten og afregningen mellem os og dig, så du kan bruge tiden på det du er bedst til. 
                        Hvis du er klar på at kickstarte din freelance-karriere, udvide dit netværk og få en masse erfaring indenfor dit speciale på dit CV, så kom i gang nu ved at klikke på knappen herunder:
                    </TwoColumnRoundedDiv>
                    <OneColumnDiv
                        header={'Fagområder'}
                        paragraph={`Vi har et særligt fokus på midlertidige jobs indenfor salg, det digitale og kreative, kundeservice,
                      operations, eksamentilsyn, økonomi og administration. Her er et overblik over nogle af de
                      stillinger/opgaver vi løser:`}
                    >
                        <CardContainer>
                            <TextCard
                                cardHeader={`SALG &\n KUNDESERVICE:`}
                                cardBody={'telefoninterviewer, mødebooker, phoner, salgskonsulent, sælger, kundeservicemedarbejde, call center medarbejder og kunderådgiver m.fl.'}
                            />
                            <TextCard
                                cardHeader={'DIGITALT &\n KREATIVT'}
                                cardBody={'webdesigner, grafisk designer, digital marketing specialist, content developer, marketing koordinator, email marketing, UX/UI designer og programmering m.fl.'}
                            />
                            <TextCard
                                cardHeader={'LAGER &\n PRODUKTION'}
                                cardBody={'webshop lager, pluk/pak, forsendelse, varemodtagelse, etikettering, montage og kvalitetstjek m.fl.'}
                            />
                            <TextCard
                                cardHeader={'ØKONOMI &\n HR'}
                                cardBody={'bogholder, controller, analyse, BI, tasteopgaver, ordrebehandling, eksamenstilsyn, samt diverse ad hoc administrative opgaver m.fl.'}
                            />
                        </CardContainer>
                    </OneColumnDiv>
                    <OneColumnDiv
                        whiteDiv
                        header={'Ansøgningsproces'}
                        paragraph={`Vi er stolte af vores mange glade kunder, som rater vores kandidater 4.5 ud af 5.0 stjerner. Du får med
                        vores hjælp sikkerhed for, at du passer godt til de opgaver vi tilbyder dig. Vi sørger også for at den 
                        virksomhed du får tilbudt arbejde i, passer til dine ønsker. \n\nDet er nemlig kun et godt match hvis både 
                        virksomheden og den ansatte er glade for hinanden - og det er vores mål!`}
                    >
                        <div>
                            <h2
                                style={{ color: '#2a5c91', marginTop: '2rem', fontSize: '1.5rem' }}
                            >Her er en kort beskrivelse af en standard ansættelsesproces:</h2> <br />
                            <ApplicationProcess />
                        </div>
                    </OneColumnDiv>
                </div>
            </div>
        );
    }
}

export default HopOmbord;
import React, { Component } from 'react';
import Head from 'next/head';

import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import TwoColumnDiv from '../../components/TwoColumnDiv/TwoColumnDiv';
import FirmaLogos from '../../components/Logo/FirmaLogo/FirmaLogos';
import ServiceIcons from '../../components/Logo/ServiceIcons/ServiceIcons';
import KontaktModalButton from '../../components/Button/KontaktModalButton';
import VirksomehederImg from '../../components/ContentImages/VirksomhederImage';
import VirksomehederImg3 from '../../components/ContentImages/VirksomhederImage3';
import VirksomehederImg4 from '../../components/ContentImages/VirksomhederImage4';
import KontaktModal from '../../components/UI/Modal/KontaktModal';
import TwoColumnRoundedDiv from '../../components/TwoColumnRoundedDiv/TwoColumnRoundedDiv';
import CarouselContainer from '../../components/CarouselContainer/CarouselContainer';
import Carousel from '../../components/UI/Carousel/Carousel';
import * as ClienPhotos from '../../components/ContentImages/ClientPhotos/ClientPhotos';
import * as VikarPhotos from '../../components/ContentImages/VikarPhotos/VikarPhotos';
import KontaktForm from '../../components/KontaktForm/KontaktForm';
import Avatar from '../../components/Avatar/Avatar';

import classes from './Virksomheder.module.css';

class Virksomheder extends Component {
    state = {
        showModal: false,
    }
    showModal = () => {
        this.setState({ showModal: true });
    }
    closeModal = () => {
        this.setState({ showModal: false });
    }
    render() {
        const pageTitle = "Virksomheder | Find din næste vikar her";
        const pageDescription = "Vikarbureau - vi hjælper dig med midlertidigt personale";
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
                <KontaktModal show={this.state.showModal} modalClosed={this.closeModal} />
                <div className={classes.Content}>
                    <Avatar topRight vikarJob = "Lager" AvatarPhoto={<VikarPhotos.VikarPhotoMathias />} />
                    <Avatar topLeft vikarJob = "Support" AvatarPhoto={<VikarPhotos.VikarPhotoKatrine />} />
                    <Avatar bottomRight bottomRightHigh vikarJob = "Kundeservice" AvatarPhoto={<VikarPhotos.VikarPhotoMagnus />} />

                    <TwoColumnDiv
                        imageDiv={<VirksomehederImg />}
                        header={'Lej en GoWork’er'}>
                        Vi formidler ambitiøse mennesker i starten af deres
                        karriere til deltids- og fuldtidsvikariater. Book 
                        f.eks. din næste bogholder, lagermedarbejder eller 
                        SoMe specialist.<br />
                        Nemt, enkelt og økonomisk. <br /><br />
                        Hvilken opgave eller projekt søger du personale til? <br />
                        <KontaktModalButton openKontakt={this.showModal} />
                    </TwoColumnDiv>
                    <OneColumnDiv
                        firmaHeader={'VI SAMARBEJDER MED 100+ SUCCESRIGE VIRKSOMHEDER OG HJÆLPER DEM MED AT FINDE DE HELT RETTE MEDARBEJDERE'}
                    >
                        <FirmaLogos />
                    </OneColumnDiv>
                    {/* <OneColumnDiv
                        whiteDiv
                        header={'3 gode grunde til at bruge os'}
                    >
                        <CardContainer>
                            <Card
                                cardPhoto={<CardMatch />}
                                cardHeader={'ET GODT MATCH'}
                                cardBody={'Kunderne giver vores\nkandidater 4,5 ud af 5,0\nstjerner. Vi giver dig\n tryghed'}
                            />
                            <Card
                                cardPhoto={<CardOkonomi />}
                                cardHeader={'SPAR PENGE'}
                                cardBody={'Lavere gebyr end\ntraditionelle bureauer.\n'}
                            />
                            <Card
                                cardPhoto={<CardAttitude />}
                                cardHeader={'HØJ DÆKNING'}
                                cardBody={'Vores\ndækningsprocent er\n 98%'}
                            />
                        </CardContainer>
                    </OneColumnDiv> */}
                    <TwoColumnRoundedDiv
                        imageDiv={<VirksomehederImg3 />}
                        header={'Personale til dit behov'}
                        >
                        <strong>Vikarløsninger</strong>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> */}
                        <br />
                        Vi hjælper dig med midlertidigt personale. Vikarløsningen er perfekt for dig, som oplever ekstraordinær travlhed, sæsonudsving, ønsker et projekt gennemført eller har personale på barsel. Vi finder det rette match indenfor de fleste fagområder til deltid eller fuldtid.<br /><br />
                        <strong>Lej først, rekruttér senere</strong>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> */}
                        <br />
                        Start din næste fastansættelse som et vikariat, og ansæt først når du er helt sikker på dit behov. Med ’Lej først, rekruttér senere’ får du og din nye medarbejder mulighed for at se hinanden an uden større omkostninger. Samtidig står vi for alt det besværlige omkring løn, jura, overenskomster og administration.<br /><br />
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg> */}
                        <strong>Lej en Specialist</strong><br />
                        Opnå hurtig adgang til kvikke hoveder, og slip samtidig for den tunge rekrutteringsproces. Vi sikrer at du har de rette spidskompetencer til rådighed ved eksempelvis projekter, afskedigelser, sygdom eller omstruktureringer. Lej en specialist på vikarbasis og undgå missede deadlines.
                    </TwoColumnRoundedDiv>
                    <OneColumnDiv
                        lightBlueDiv
                        header={'Kvikke hoveder til de fleste opgaver'}
                        paragraph={`Vi holder os skarpt opdateret på udviklingen indenfor flere fagområder. Sådan sikrer vi at din virksomhed til enhver tid har de stærkeste kandidater til opgaven.`}
                    >
                        Vælg det område du søger personale til:
                        <ServiceIcons />
                        <br />
                        Søger du personale til andre opgaver? <br /> <br />
                        <a
                            style={{ cursor: 'pointer' }}
                            onClick={this.showModal}>
                            Fortæl os om dit behov
                        </a>
                    </OneColumnDiv>
                    <TwoColumnRoundedDiv
                        ReverseContainer
                        imageDiv={<VirksomehederImg4 />}
                        header={'Hvorfor bruge os?'}
                        >
                        <strong>Undgå tidsspild</strong>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> */}
                        <br />
                        Vores kandidater scorer 8,6 ud af 10 mulige ift. i hvor høj grad, de matcher arbejdsgiverens forventninger. Via datadrevet annoncering og et solidt rekrutteringshåndværk sørger vi for, at du undgår tidsspild på de forkerte match. <br /><br />
                        <strong>Den bedste anbefaling (Net Promoter Score)</strong>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> */}
                        <br />
                        9,5 af 10 kunder vil anbefale GoWork til deres ven, kollega eller netværk. På vores netop gennemførte NPS 2021 Survey scorer vi 89 (hvilket svarer til verdensklasse jf. Bain &amp; Company).<br /><br />
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg> */}
                        <strong>Sikkerhed for at opgaven bliver løst</strong><br />
                        Vi besætter 98 pct. af de opgaver, vi får ind. Med en pragmatisk tilgang til samarbejdet melder vi klart ud fra start, så du ved, om vi er den rette samarbejdspartner til opgaven. Når vi siger ja, så mener vi det, og arbejder fokuseret på at komme i mål – så du undgår at skubbe dine deadlines.
                    </TwoColumnRoundedDiv>
                    {/* Carousel for virksomheder */}
                    <CarouselContainer header={'Hvad siger vores kunder?'}>
                        <Carousel
                            slide1={`Vi er særdeles tilfredse med vores samarbejde med GoWork. Vi er i en branche, hvor behovet
                            for personale varierer enormt - ofte med kort varsel. Med det samarbejde vi har
                            med GoWork, er vi aldrig bange for at tage opgaver ind.`}
                            vikarPhoto1={<ClienPhotos.ClientPhotoJacob />}
                            slide1Name={'Jacob'}
                            firma1={'Alex Andersen Ølund A/S'}
                            // slide2={`GoWork kan noget andet – og det fungerer godt. De formidler selvstændige mennesker 
                            // med den rette indstilling, som altid er klar på nye udfordringer, og hurtige til 
                            // at sætte sig ind i opgaverne. `}
                            // vikarPhoto2={<ClienPhotos.ClientPhotoRikke />}
                            // slide2Name={'Rikke'}
                            // firma2={'Valeur A/S'}
                            slide3={`Vi oplever altid at vikarer fra GoWork møder op til tiden, velforberedte og med et smil på læben. Det er derfor en fornøjelse at arbejde sammen med GoWork, både med kontoret og de vikarer, der møder ind.`}
                            vikarPhoto3={<ClienPhotos.ClientPhotoJimi />}
                            slide3Name={'Jimi'}
                            firma3={'Micro Technic A/S'}
                            slide2={`GoWork leverede varen i forhold til vores eksamener.
                            Det var kvalificerede medarbejdere -
                            unge mennesker med overblik.
                            Og de var både hurtige og vågne`}
                            vikarPhoto2={<ClienPhotos.ClientPhotoTine />}
                            slide2Name={'Jacob'}
                            firma2={'Skanderborg Gymnasium'}
                        />
                    </CarouselContainer>
                    <OneColumnDiv
                        darkBlueDiv
                        header={'Vil du fortælle os lidt om dit personalebehov?'}
                        // paragraph={`Skriv til os!`}
                    >
                        <KontaktModalButton whiteButton openKontakt={this.showModal}/>
                    </OneColumnDiv>
                </div>
            </React.Fragment>
        );
    }
}

export default Virksomheder;
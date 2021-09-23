import React, { Component } from 'react';
import Head from 'next/head';

import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import TwoColumnDiv from '../../components/TwoColumnDiv/TwoColumnDiv';
import FirmaLogos from '../../components/Logo/FirmaLogo/FirmaLogos';
import ServiceIcons from '../../components/Logo/ServiceIcons/ServiceIcons';
import CardContainer from '../../components/Card/CardContainer';
import Card from '../../components/Card/Card';
import CardMatch from '../../components/ContentImages/CardImages/CardMatch';
import CardOkonomi from '../../components/ContentImages/CardImages/CardOkonomi';
import CardAttitude from '../../components/ContentImages/CardImages/CardAttitude';
import KontaktModalButton from '../../components/Button/KontaktModalButton';
import VirksomehederImg from '../../components/ContentImages/VirksomhederImage';
import VirksomehederImg2 from '../../components/ContentImages/VirksomhederImage2';

import classes from './Virksomheder.module.css';

import KontaktModal from '../../components/UI/Modal/KontaktModal';
import CarouselContainer from '../../components/CarouselContainer/CarouselContainer';
import Carousel from '../../components/UI/Carousel/Carousel';
import * as ClienPhotos from '../../components/ContentImages/ClientPhotos/ClientPhotos';
import * as VikarPhotos from '../../components/ContentImages/VikarPhotos/VikarPhotos';
import Avatar from '../../components/Avatar/Avatar';

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
        return (
            <React.Fragment>
                <Head>
                    <title>Virksomheder</title>
                    <meta name="description" content="Virksomheder SIDE" />
                </Head>
                <KontaktModal show={this.state.showModal} modalClosed={this.closeModal} />
                <div className={classes.Content}>
                    <Avatar topRight vikarJob = "Lager" AvatarPhoto={<VikarPhotos.VikarPhotoMathias />} />
                    <Avatar topLeft vikarJob = "Support" AvatarPhoto={<VikarPhotos.VikarPhotoKatrine />} />
                    <Avatar bottomRight vikarJob = "Kundeservice" AvatarPhoto={<VikarPhotos.VikarPhotoMagnus />} />

                    <TwoColumnDiv
                        imageDiv={<VirksomehederImg />}
                        header={'Lej en GoWork’er \n - og få opgaven løst'}>
                        GoWork formidler ambitiøse mennesker i starten af
                        deres karriere til vikar- og specialiststillinger.
                        Nemt, enkelt og økonomisk. <br /><br /><br />
                        Hvilken opgave eller projekt søger du personale til? <br />
                        <KontaktModalButton openKontakt={this.showModal} />
                    </TwoColumnDiv>
                    <OneColumnDiv
                        firmaHeader={'VI SAMARBEJDER MED 100+ SUCCESRIGE VIRKSOMHEDER OG HJÆLPER DEM MED AT FINDE DE HELT RETTE MEDARBEJDERE.'}
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
                    <TwoColumnDiv
                        ReverseContainer
                        imageDiv={<VirksomehederImg2 />}
                        header={'Tre gode grunde til at bruge os'}>
                        <strong>Et godt match </strong>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> */}
                        <br />
                        Via vores omfattende netværk til dygtige kandidater kombineret med en grundig rekrutteringsproces sørger vi for, at du undgår tidsspild på det forkerte match. Kunderne giver vores matchevne 4,5 ud af 5 stjerner.  <br /><br />
                        <strong>Tilfredse kunder</strong>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> */}
                        <br />
                        9 af 10 kunder vil anbefale GoWork til deres <br />
                        ven, kollega eller netværk - og det er vi pavestolte over.<br /><br />
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg> */}
                        <strong>Høj dækning</strong><br />
                        Vi besætter 98 pct. af de opgaver vi får ind. Med en pragmatisk tilgang til samarbejdet melder vi klart ud fra start, så du ved om vi er den rette til at løse opgaven. Når vi siger ja, så mener vi det – og arbejder fokuseret på at komme i mål, så du når dine deadlines.
                    </TwoColumnDiv>
                    <OneColumnDiv
                        lightBlueDiv
                        header={'Kvikke hoveder til de fleste opgaver'}
                        paragraph={`Vi holder os skarpt opdateret på udviklingen indenfor flere fagområder. Sådan sikrer vi at din
                    virksomhed til enhver tid har de stærkeste kandidater til opgaven.`}
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
                    {/* Carousel for virksomheder */}
                    <CarouselContainer whiteDiv header={'Hvad siger vores kunder?'}>
                        <Carousel
                            slide1={`Vi er særdeles tilfredse med vores samarbejde med GoWork. Vi er i en branche, hvor behovet
                            for personale varierer enormt - ofte med kort varsel. Med det samarbejde vi har
                            med GoWork, er vi aldrig bange for at tage opgaver ind.`}
                            vikarPhoto1={<ClienPhotos.ClientPhotoJacob />}
                            slide1Name={'Jacob'}
                            firma1={'Alex Andersen Ølund A/S'}
                            slide2={`GoWork kan noget andet – og det fungerer godt. De formidler selvstændige mennesker 
                            med den rette indstilling, som altid er klar på nye udfordringer, og hurtige til 
                            at sætte sig ind i opgaverne. `}
                            vikarPhoto2={<ClienPhotos.ClientPhotoRikke />}
                            slide2Name={'Rikke'}
                            firma2={'Valeur A/S'}
                            slide3={`GoWork leverede varen i forhold til vores eksamener.
                            Det var kvalificerede medarbejdere -
                            unge mennesker med overblik.
                            Og de var både hurtige og vågne`}
                            vikarPhoto3={<ClienPhotos.ClientPhotoTine />}
                            slide3Name={'Jacob'}
                            firma3={'Skandeborg Gymnasium'}
                        />
                    </CarouselContainer>
                </div>
            </React.Fragment>
        );
    }
}

export default Virksomheder;
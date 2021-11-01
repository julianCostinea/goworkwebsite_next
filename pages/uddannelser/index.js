import React, { Component } from 'react';
import Head from 'next/head';

import classes from './Uddanelser.module.css';

import KontaktModalButton from '../../components/Button/KontaktModalButton';
import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import TwoColumnDiv from '../../components/TwoColumnDiv/TwoColumnDiv';
import SchoolLogos from '../../components/Logo/FirmaLogo/SchoolLogos';
import UddannelserImage from '../../components/ContentImages/UddannelserImage';
import ClientVideoDiv from '../../components/ClientVideoDiv/ClientVideoDiv';
import KontaktModal from '../../components/UI/Modal/KontaktModal';
import UddanelserImage from '../../components/ContentImages/UddanelserImage';
import UddanelserImage3 from '../../components/ContentImages/UddanelserImage3';
import Avatar from '../../components/Avatar/Avatar';
import TwoColumnRoundedDiv from '../../components/TwoColumnRoundedDiv/TwoColumnRoundedDiv';
import * as VikarPhotos from '../../components/ContentImages/VikarPhotos/VikarPhotos';

class Uddanelser extends Component {
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
        const pageTitle = "Uddannelser | Find din næste eksamensvagt her";
        const pageDescription = "Find kompetent og fleksibelt eksamenstilsyn til at hjælpe med jeres prøver";
        return (
            <div>
                <Head>
                    <title>{pageTitle}</title>
                    <meta name="description" content={pageDescription} />
                    <meta property="og:title" content={pageTitle} />
                    <meta property="og:description" content={pageDescription} />
                    <meta name="twitter:title" content={pageTitle} />
                    <meta name="twitter:description" content={{ pageDescription }} />
                </Head>
                <KontaktModal show={this.state.showModal} modalClosed={this.closeModal} />
                <div className={classes.Content}>
                    <Avatar topRight vikarJob="Vagt" AvatarPhoto={<VikarPhotos.VikarPhotoMathias />} />
                    <Avatar topLeft vikarJob="Vagt" AvatarPhoto={<VikarPhotos.VikarPhotoKatrine />} />
                    <Avatar bottomRight vikarJob="Koordinator" AvatarPhoto={<VikarPhotos.VikarPhotoMagnus />} />
                    <TwoColumnDiv
                        imageDiv={<UddannelserImage />}
                        header={'Book din næste eksamensvagt her!'}>
                        GoWork er løsningen, når du har behov for
                        et kompetent og fleksibelt eksamenstilsyn.
                        Du undgår besværet med administration af eget korps,
                        og sparer både tid og penge.<br /><br />
                        Fortæl os kort om dit behov.<br />
                        <KontaktModalButton openKontakt={this.showModal} />
                    </TwoColumnDiv>
                    <OneColumnDiv
                        firmaHeader={'VI SAMARBEJDER MED 50+ UDDANNELSESSTEDER OG HJÆLPER DEM MED AT FINDE DE HELT RETTE EKSAMENSVAGTER'}
                    >
                        <div style={{ marginTop: '2rem' }}>
                            <SchoolLogos />
                        </div>
                    </OneColumnDiv>
                    <TwoColumnRoundedDiv
                        imageDiv={<UddanelserImage />}
                        ReverseContainer
                        header={'Fleksible løsninger til alle behov'}>
                        Vi skræddersyer løsningen, så den matcher jeres behov. Der kan være tale om alt fra få eksamensvagter til fuld outsourcing.<br /><br />
                        Vores team af kompetente konsulenter med omfattende viden og erfaring indenfor eksamenstilsyn, sikrer at alle udsendte vagter er klædt på til opgaven, så regler og retningslinjer altid bliver overholdt.
                        Vores mission er, i alt sin enkelthed, at bringe jer sikkert igennem en hektisk eksamenstid.
                    </TwoColumnRoundedDiv>
                    <ClientVideoDiv
                        header={''}>
                        <h4>Hvad siger vores kunder? </h4>
                        <p>Hør det fra Skanderborg Gymnasium her.</p> <br /><br />
                        <div style={{ fontStyle: "italic", textAlign: "left" }}>
                            &quot;GoWork leverede varen i forhold til vores eksamener. <br />
                            Det var kvalificerede medarbejdere - <br />
                            unge mennesker med overblik. <br />
                            Og de var både hurtige og vågne.&quot;<br /><br /><br />
                        </div>
                        <p><strong>Uddannelsesleder, Jacob</strong> </p>
                    </ClientVideoDiv>
                    <TwoColumnRoundedDiv
                        whiteDiv
                        ReverseContainer
                        imageDiv={<UddanelserImage3 />}
                        header={'Hvorfor bruge os?'}>
                        <strong>Undgå tidskrævende administration med eget tilsyn</strong>
                        <br />
                        I sender blot jeres bestilling via vores online bestillingsplatform, så klarer vi resten – lige fra rekruttering til orientering, gennemførelse og aflønning af vagter. <br /><br />
                        <strong>Tryghed</strong>
                        <br />
                        Med indgående kendskab til gennemførelse af eksamenstilsyn kombineret med en grundig rekrutteringsproces sikrer vi, at du altid har et kompetent og velforberedt tilsyn ved hånden. <br /><br />
                        <strong>Sikkerhed for det rette antal vagter</strong><br />
                        Vi afdækker jeres behov i god tid, afstemmer forventninger til eksamensperioden, og går målrettet til værks, så I har det rette antal vagter klar til den travle tid – også hvis der opstår sygemeldinger.
                    </TwoColumnRoundedDiv>
                    {/* <OneColumnDiv
                        whiteDiv
                        header={'Tre gode grunde til at bruge os'}>
                        <CardContainer>
                            <Card
                                cardPhoto={<CardMatch />}
                                cardHeader={'ET GODT MATCH'}
                                cardBody={'Kunderne giver vores\nkandidater 4,5 ud af 5,0\n stjerner.'}
                            />
                            <Card
                                cardPhoto={<CardOkonomi />}
                                cardHeader={'HØJ DÆKNING'}
                                cardBody={'Vores\ndækningsprocent er\n 98%'}
                            />
                            <Card
                                cardPhoto={<CardFleksibilitet />}
                                cardHeader={'FLEKSIBILITET'}
                                cardBody={'Skru op og ned\nfor antal bestilte vagter\nsom det passer dig.'}
                            />
                        </CardContainer>
                    </OneColumnDiv> */}
                    {/* <OneColumnDiv
                        whiteDiv
                        header={'Fleksible løsninger til alle behov'}
                        paragraph={`
                    Vi skræddersyer løsningen, så den matcher jeres behov. Der kan være tale om alt fra få eksamensvagter til fuld outsourcing.

                    Vores team af kompetente konsulenter med omfattende viden og erfaring indenfor eksamenstilsyn,sikrer at alle udsendte vagter er klædt på til opgaven, så regler og retningslinjer altid bliver overholdt.
                    
                    Vores mission er, i alt sin enkelthed, at bringe jer sikkert igennem en hektisk eksamenstid. 
                    `}
                    /> */}
                </div>
            </div>
        );
    }
}

export default Uddanelser;
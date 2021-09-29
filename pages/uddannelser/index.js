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
import * as TeamPhotos from '../../components/ContentImages/TeamPhotos/TeamPhotos';

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
        return (
            <div>
                <Head>
                    <title>Uddannelser</title>
                    <meta name="description" content="Uddannelser SIDE" />
                </Head>
                <KontaktModal show={this.state.showModal} modalClosed={this.closeModal} />
                <div className={classes.Content}>
                    <Avatar topRight vikarJob="Koordinator" AvatarPhoto={<TeamPhotos.CandidatePhotoJonas />} />
                    <Avatar topLeft vikarJob="Vagt" AvatarPhoto={<TeamPhotos.CandidatePhotoJulian />} />
                    <Avatar bottomRight vikarJob="Vagt" AvatarPhoto={<TeamPhotos.CandidatePhotoErik />} />
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
                        firmaHeader={'VI SAMARBEJDER MED 50+ UDDANNELSESSTEDER OG HJÆLPER DEM MED AT FINDE DE HELT RETTE EKSAMENSVAGTER.'}
                    >
                        <div style={{ marginTop: '2rem' }}>
                            <SchoolLogos />
                        </div>
                    </OneColumnDiv>
                    <ClientVideoDiv
                        whiteDiv
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
                    <TwoColumnDiv
                        lightBlueDiv
                        imageDiv={<UddanelserImage3 />}
                        header={''}>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> */}
                        <h2>Hvorfor bruge os?</h2> <br/>
                        <strong>Fleksibilitet </strong>
                        <br />
                        Skru op og ned for antal bestilte vagter som det passer dig<br /><br /><br />
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20px" height="20px" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> */}
                        <strong>Tilfredse kunder</strong>
                        <br />
                        9 af 10 kunder vil anbefale GoWork til deres <br />
                        ven, kollega eller netværk - og det er vi pavestolte over.<br /><br /><br />
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20px" height="20px" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg> */}
                        <strong>Høj dækning</strong><br />
                        Vi besætter 98 pct. af de opgaver vi får ind. Med en pragmatisk tilgang til samarbejdet melder vi klart ud fra start, så du ved om vi er den rette til at løse opgaven. Når vi siger ja, så mener vi det – og arbejder fokuseret på at komme i mål, så du når dine deadlines.
                    </TwoColumnDiv>
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
                    <TwoColumnDiv
                        imageDiv={<UddanelserImage />}
                        ReverseContainer
                        header={'Fleksible løsninger til alle behov'}>
                        Vi skræddersyer løsningen, så den matcher jeres behov. Der kan være tale om alt fra få eksamensvagter til fuld outsourcing.<br /><br />
                        Vores team af kompetente konsulenter med omfattende viden og erfaring indenfor eksamenstilsyn,sikrer at alle udsendte vagter er klædt på til opgaven, så regler og retningslinjer altid bliver overholdt.
                        Vores mission er, i alt sin enkelthed, at bringe jer sikkert igennem en hektisk eksamenstid.
                    </TwoColumnDiv>
                </div>
            </div>
        );
    }
}

export default Uddanelser;
import React, { Component } from 'react';
import Head from 'next/head';

import classes from './Uddanelser.module.css';

import KontaktModalButton from '../../components/Button/KontaktModalButton';
import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import TwoColumnDiv from '../../components/TwoColumnDiv/TwoColumnDiv';
import SchoolLogos from '../../components/Logo/FirmaLogo/SchoolLogos';
import CardContainer from '../../components/Card/CardContainer';
import Card from '../../components/Card/Card';
import CardMatch from '../../components/ContentImages/CardImages/CardMatch';
import CardFleksibilitet from '../../components/ContentImages/CardImages/CardFleksibilitet';
import CardOkonomi from '../../components/ContentImages/CardImages/CardOkonomi';
import UddannelserImage from '../../components/ContentImages/UddannelserImage';
import ClientVideoDiv from '../../components/ClientVideoDiv/ClientVideoDiv';
import KontaktModal from '../../components/UI/Modal/KontaktModal';

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
                    <TwoColumnDiv
                        imageDiv={<UddannelserImage />}
                        header={'Book dit \n eksamenstilsyn her!'}>
                        GoWork er løsningen, når du har behov for<br />
                        et kompetent og fleksibelt eksamenstilsyn.<br />
                        Du undgår besværet med administration af eget korps,<br />
                        og sparer både tid og penge.<br /><br />
                        Fortæl os kort om dit behov.<br />
                        <KontaktModalButton openKontakt={this.showModal} />
                    </TwoColumnDiv>
                    <OneColumnDiv
                        firmaHeader={'VI ER DEN FORETRUKNE LEVERANDØR HOS +50 UDDANNELSESSTEDER'}
                    >
                        <div style={{ marginTop: '2rem' }}>
                            <SchoolLogos />
                        </div>
                    </OneColumnDiv>
                    <OneColumnDiv
                        whiteDiv
                        header={'3 gode grunde til at bruge os'}>
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
                            {/* <Card 
                            cardPhoto = {<CardOkonomi />}
                            cardHeader = {'ØKONOMI'}
                            cardBody ={'Lavere vikargebyr\nend hos traditionelle\n vikarbureauer.'}
                            /> */}

                        </CardContainer>
                    </OneColumnDiv>
                    <OneColumnDiv
                        header={'Fleksible løsninger til alle behov'}
                        paragraph={`
                    Vi skræddersyer løsningen, så den matcher jeres behov. Der kan være tale om alt fra få 
                    eksamensvagter til fuld outsourcing. \n
                    Vores team af kompetente konsulenter med omfattende viden og erfaring indenfor eksamenstilsyn,
                    sikrer at alle udsendte vagter er klædt på til opgaven, så regler og retningslinjer altid bliver overholdt. \n
                    Vores mission er, i alt sin enkelthed, at bringe jer sikkert igennem en hektisk eksamenstid. 
                    `}
                    />
                    <ClientVideoDiv
                        whiteDiv
                        header={'Hvad siger vores kunder om os?'}>
                        <p>Hør det fra Skanderborg Gymnasium her.</p> <br /><br />
                        <div style={{ fontStyle: "italic", textAlign: "left" }}>
                            &quot;GoWork leverede varen i forhold til vores eksamener. <br />
                            Det var kvalificerede medarbejdere - <br />
                            unge mennesker med overblik. <br />
                            Og de var både hurtige og vågne.&quot;<br /><br />
                        </div>
                        <p><strong>Uddannelsesleder, Jacob Peter Thomsen</strong> </p>
                    </ClientVideoDiv>
                </div>
            </div>
        );
    }
}

export default Uddanelser;
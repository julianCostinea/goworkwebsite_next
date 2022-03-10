import React, { Component } from 'react';
import Head from 'next/head';

import classes from './uddannelser.module.css';

import KontaktModalButton from '../../../components/Button/KontaktModalButton';
import OneColumnDiv from '../../../components/OneColumnDiv/OneColumnDiv';
import TwoColumnDiv from '../../../components/TwoColumnDiv/TwoColumnDiv';
import SchoolLogos from '../../../components/Logo/FirmaLogo/SchoolLogos';
import UddannelserImage from '../../../components/ContentImages/UddannelserImage';
import ClientVideoDiv from '../../../components/ClientVideoDiv/ClientVideoDiv';
import KontaktModal from '../../../components/UI/Modal/KontaktModal';
import UddanelserImage from '../../../components/ContentImages/UddanelserImage';
import UddanelserImage3 from '../../../components/ContentImages/UddanelserImage3';
import Avatar from '../../../components/Avatar/Avatar';
import TwoColumnRoundedDiv from '../../../components/TwoColumnRoundedDiv/TwoColumnRoundedDiv';
import * as VikarPhotos from '../../../components/ContentImages/VikarPhotos/VikarPhotos';

class Uddannelser extends Component {
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
        const pageTitle = "Educational sites | Find your next external exam supervisor here";
        const pageDescription = "Find competent and flexible exam supervisors to help with your tests";
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
                <KontaktModal englishVersion show={this.state.showModal} modalClosed={this.closeModal} />
                <div className={classes.Content}>
                    <Avatar topRight vikarJob="Vagt" AvatarPhoto={<VikarPhotos.VikarPhotoMathias />} />
                    <Avatar topLeft vikarJob="Vagt" AvatarPhoto={<VikarPhotos.VikarPhotoKatrine />} />
                    <Avatar bottomRight vikarJob="Koordinator" AvatarPhoto={<VikarPhotos.VikarPhotoMagnus />} />
                    <TwoColumnDiv
                        imageDiv={<UddannelserImage />}
                        header={'Book your next exam supervisor here!'}>
                        GoWork is the solution when you need a flexible and competent group of exams supervisors. We take care of the administration which will save you both time and money.<br /><br />
                        Tell us about your requests<br />
                        <KontaktModalButton englishVersion openKontakt={this.showModal} />
                    </TwoColumnDiv>
                    <OneColumnDiv
                        firmaHeader={'WE WORK TOGETHER WITH 50+ PLACES OF EDUCATION. WE HELP THEM FIND THE RIGHT EXAM SUPERVISORS!'}
                    >
                        <div style={{ marginTop: '2rem' }}>
                            <SchoolLogos />
                        </div>
                    </OneColumnDiv>
                    <TwoColumnRoundedDiv
                        imageDiv={<UddanelserImage />}
                        header={'Flexible solutions for all requests'}>
                        We tailor the solution, so it fits perfectly to your requirements. The solution can range from a few exam supervisors to complete outsourcing.<br /><br />
                        Our team of competent consultants, with extensive knowledge and experience in exam supervision, ensures that all supervisors are equipped for the task, so rules and guidelines are always complied with. Our mission is, in all its simplicity, to bring you safely through a hectic exam period.
                    </TwoColumnRoundedDiv>
                    <ClientVideoDiv
                        header={''}>
                        <h4>What do our customers say?</h4>
                        <p>Here is a statement from Skanderborg Gymnasium</p> <br /><br />
                        <div style={{ fontStyle: "italic", textAlign: "left" }}>
                            &quot;GoWork delivered great supervisors for our exams.<br />
                            It was qualified employees - <br />
                            young people with a breadth of view. <br />
                            They were both fast and aware.&quot;<br /><br /><br />
                        </div>
                        <p><strong>Educational leader, Jacob</strong> </p>
                    </ClientVideoDiv>
                    <TwoColumnRoundedDiv
                        whiteDiv
                        imageDiv={<UddanelserImage3 />}
                        header={'Why work with us?'}>
                        <strong>Avoid time consuming administration of exam supervisors</strong>
                        <br />
                        You simply have to send your order via our online ordering platform, and we can do the rest - from recruitment to orientation, implementation, and remuneration of supervisors. <br /><br />
                        <strong>Safety</strong>
                        <br />
                        With the great knowledge we have from conducting many exam supervisions, combined with a thorough recruitment process, we ensure that you always have competent and well-prepared supervision at hand. <br /><br />
                        <strong>Security for the right amount of supervisors</strong><br />
                        We identify your needs well in advance, adjust expectations for the exam period, and work purposefully so that you have the correct number of supervisors ready for the busy time - even if reporting of illness occurs. 
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

export default Uddannelser;
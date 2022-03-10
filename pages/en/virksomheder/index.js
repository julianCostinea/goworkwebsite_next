import React, { Component } from 'react';
import Head from 'next/head';

import OneColumnDiv from '../../../components/OneColumnDiv/OneColumnDiv';
import TwoColumnDiv from '../../../components/TwoColumnDiv/TwoColumnDiv';
import FirmaLogos from '../../../components/Logo/FirmaLogo/FirmaLogos';
import ServiceIcons from '../../../components/Logo/ServiceIcons/ServiceIcons';
import KontaktModalButton from '../../../components/Button/KontaktModalButton';
import VirksomehederImg from '../../../components/ContentImages/VirksomhederImage';
import VirksomehederImg3 from '../../../components/ContentImages/VirksomhederImage3';
import VirksomehederImg4 from '../../../components/ContentImages/VirksomhederImage4';
import KontaktModal from '../../../components/UI/Modal/KontaktModal';
import TwoColumnRoundedDiv from '../../../components/TwoColumnRoundedDiv/TwoColumnRoundedDiv';
import CarouselContainer from '../../../components/CarouselContainer/CarouselContainer';
import Carousel from '../../../components/UI/Carousel/Carousel';
import * as ClienPhotos from '../../../components/ContentImages/ClientPhotos/ClientPhotos';
import * as VikarPhotos from '../../../components/ContentImages/VikarPhotos/VikarPhotos';
import Avatar from '../../../components/Avatar/Avatar';

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
        const pageTitle = "Companies | Find your next temp here";
        const pageDescription = "Temporary agency - we help you with temporary staff";
        return (
            <React.Fragment>
                <Head>
                    <title>{pageTitle}</title>
                    <meta name="description" content={pageDescription} />
                    <meta property="og:title" content={pageTitle} />
                    <meta property="og:description" content={pageDescription}/>
                    <meta name="twitter:title" content={pageTitle}/>
                    <meta name="twitter:description" content={pageDescription} />
                </Head>
                <KontaktModal englishVersion show={this.state.showModal} modalClosed={this.closeModal} />
                <div className={classes.Content}>
                    <Avatar topRight vikarJob = "Warehouse" AvatarPhoto={<VikarPhotos.VikarPhotoMathias />} />
                    <Avatar topLeft vikarJob = "Support" AvatarPhoto={<VikarPhotos.VikarPhotoKatrine />} />
                    <Avatar bottomRight bottomRightHigh vikarJob = "Customer Service" AvatarPhoto={<VikarPhotos.VikarPhotoMagnus />} />

                    <TwoColumnDiv
                        imageDiv={<VirksomehederImg />}
                        header={'Hire a GoWork’er'}>
                        We recruit ambitious people at the beginning of their careers, for part-time and full-time temporary positions. 
                        Book, for example, your next accountant, warehouse employee, or 
                        SoMe specialist. <br />
                        Easy, simple and economical.<br /><br />
                        For which assignments or projects do you need employees?<br />
                        <KontaktModalButton englishVersion openKontakt={this.showModal} />
                    </TwoColumnDiv>
                    <OneColumnDiv
                        firmaHeader={'WE WORK TOGETHER WITH 100+ SUCCESSFUL COMPANIES. WE HELP THEM FIND THE RIGHT EMPLOYEES!   '}
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
                        header={'Personnel tailored to your requests'}
                        >
                        <strong>Temp solutions</strong>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> */}
                        <br />
                        We help you find temporary personnel. The temporary solution is perfect for you who experience extraordinary bustle, seasonal fluctuations, want a project completed, or have employees on maternity leave. We find the right match for part-time or full-time positions.<br /><br />
                        <strong>Try first, hire later</strong>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> */}
                        <br />
                        Try out your next potential full-time employee as a temporary worker and hire them when the time is right. With ‘Try first, hire later’, you and your new employee will have the opportunity to evaluate each other without any greater costs. At the same time, we will take care of tiresome tasks like salary, legal, union agreements, and administration.<br /><br />
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg> */}
                        <strong>Hire a specialist</strong><br />
                        Get quick access to bright minds without spending time on a long recruitment process. We will make sure that you will get the right set of skills available for your projects, redundancies, illnesses, or restructurings. Hire a specialist on a temporary basis and avoid missing deadlines.
                    </TwoColumnRoundedDiv>
                    <OneColumnDiv
                        lightBlueDiv
                        header={'Bright minds for a wide range of tasks'}
                        paragraph={`By staying up to date within a wide range of professional fields, we can secure the best candidates for your company.`}
                    >
                        Select the area you need personnel for:
                        <ServiceIcons englishVersion/>
                        <br />
                        Got something else in mind? <br /> <br />
                        <a
                            style={{ cursor: 'pointer' }}
                            onClick={this.showModal}>
                            Tell us about your requests
                        </a>
                    </OneColumnDiv>
                    <TwoColumnRoundedDiv
                        ReverseContainer
                        imageDiv={<VirksomehederImg4 />}
                        header={'Why choose us?'}
                        >
                        <strong>Avoid wasting time</strong>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> */}
                        <br />
                        Our candidates score an 8,6 out of 10 concerning how well our clients feel they match their needs and expectations. Through a data driven recruitment process we make sure that you avoid wasting your time on the wrong candidates. <br /><br />
                        <strong>The best recommendation (Net Promoter Score)</strong>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> */}
                        <br />
                        9,5 out of 10 of our clients would recommend GoWork to a friend, coworker, or their network. In our brand new NPS 2021 Survey we scored 89 (a score rated world class cf. Bain &amp; Company). <br /><br />
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg> */}
                        <strong>Guaranteeing a job well done</strong><br />
                        We occupy 98% of the orders we get. With a pragmatic and transparent approach to our cooperation with our clients, we will be honest with you about whether we believe we are the right company for the job. When we say yes, we mean it! We will make sure to get you what you need so that you avoid pushing your deadlines.
                    </TwoColumnRoundedDiv>
                    {/* Carousel for virksomheder */}
                    <CarouselContainer header={'What do our clients say?'}>
                        <Carousel
                            slide1={`We are very pleased with our cooperation with GoWork. We work in a business, where the need for personnel can change quickly. We are never afraid to take on tasks with GoWork as a partner.`}
                            vikarPhoto1={<ClienPhotos.ClientPhotoJacob />}
                            slide1Name={'Jacob'}
                            firma1={'Alex Andersen Ølund A/S'}
                            // slide2={`GoWork kan noget andet – og det fungerer godt. De formidler selvstændige mennesker 
                            // med den rette indstilling, som altid er klar på nye udfordringer, og hurtige til 
                            // at sætte sig ind i opgaverne. `}
                            // vikarPhoto2={<ClienPhotos.ClientPhotoRikke />}
                            // slide2Name={'Rikke'}
                            // firma2={'Valeur A/S'}
                            slide3={`Our experience with temps from GoWork is that they show up on time and are well informed with a smile on their face. That is why it is a pleasure to work with GoWork.`}
                            vikarPhoto3={<ClienPhotos.ClientPhotoJimi />}
                            slide3Name={'Jimi'}
                            firma3={'Micro Technic A/S'}
                            slide2={`GoWork delivered great supervisors for our exams. It was qualified employees – young people with a breadth of view. And they were both fast and aware.`}
                            vikarPhoto2={<ClienPhotos.ClientPhotoTine />}
                            slide2Name={'Jacob'}
                            firma2={'Skanderborg Gymnasium'}
                        />
                    </CarouselContainer>
                    <OneColumnDiv
                        darkBlueDiv
                        header={'Would you like to tell us about your personnel requests?'}
                        // paragraph={`Skriv til os!`}
                    >
                        <KontaktModalButton englishVersion whiteButton openKontakt={this.showModal}/>
                    </OneColumnDiv>
                </div>
            </React.Fragment>
        );
    }
}

export default Virksomheder;
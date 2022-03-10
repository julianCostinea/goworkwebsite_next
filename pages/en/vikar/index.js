import React, { Component } from 'react';
import Head from 'next/head';

import OneColumnDiv from '../../../components/OneColumnDiv/OneColumnDiv';
import TwoColumnDiv from '../../../components/TwoColumnDiv/TwoColumnDiv';
import { VikarPhoto } from '../../../components/ContentImages/JobLaptop';
import CardContainer from '../../../components/Card/CardContainer';
import Avatar from '../../../components/Avatar/Avatar';
import Card from '../../../components/Card/Card';
import CardFrihed from '../../../components/ContentImages/CardImages/CardFrihed';
import CardKompetence from '../../../components/ContentImages/CardImages/CardKompetence';
import CardTeam from '../../../components/ContentImages/CardImages/CardTeam';
import CarouselContainer from '../../../components/CarouselContainer/CarouselContainer';
import Carousel from '../../../components/UI/Carousel/Carousel';
import * as VikarPhotos from '../../../components/ContentImages/VikarPhotos/VikarPhotos';

import classes from './Vikar.module.css';

class Vikar extends Component {
    render() {
        let pageDescription = "At GoWork, you will always find plenty of vacancies across the country. Find your way to your next job here!";
        let pageTitle = "Find job | Apply for one of our vacancies";
        if (this.props.homePage) {
            pageTitle = "GoWork | Temp and specialist agency";
            pageDescription = "GoWork ApS helps companies and employees find the right match. Apply for a job or find your next employee here";
        }
        return (
            <React.Fragment>
                <Head>
                    <title>{pageTitle}</title>
                    <meta name="description" content={pageDescription} />
                    <meta property="og:title" content={pageTitle} />
                    <meta property="og:description" content={pageDescription} />
                    <meta name="twitter:title" content={pageTitle} />
                    <meta name="twitter:description" content={{ pageDescription }} />
                </Head>
                <div className={classes.Content}>
                    <Avatar topRight vikarJob="Warehouse" AvatarPhoto={<VikarPhotos.VikarPhotoMathias />} />
                    <Avatar topLeft vikarJob="Support" AvatarPhoto={<VikarPhotos.VikarPhotoKatrine />} />
                    <Avatar bottomRight bottomRightLow vikarJob="Customer Service" AvatarPhoto={<VikarPhotos.VikarPhotoMagnus />} />
                    <TwoColumnDiv
                        imageDiv={<VikarPhoto />}
                        buttonText={'Available positions'}
                        buttonLink={'/ledige-stillinger.html'}
                        button2Text={'Create a resume'}
                        button2Link={'/ledige-stillinger.html?hr=show-job%2F32004%26locale%3Dda_DK'}
                        header={'Are you looking for a flexible job?'}
                        underText={'Read about your options '}
                        englishVersion
                    >
                        Become a GoWorker! We offer temporary jobs tailored to your schedule, whether you are a student, graduate, or specialist. <br /><br />
                    </TwoColumnDiv>
                    <OneColumnDiv
                        header={'Attention all doers'}
                        paragraph={`Our team of temps and specialist employees is a group of ambitious people in the early years of their careers. Our GoWorkers want to meet new employers and coworkers, they enjoy the freedom of a temporary contract, and are ready to jump in at a moment’s notice.`}
                    >
                        Create your resume – if not now, when?
                    </OneColumnDiv>
                    <OneColumnDiv
                        whiteDiv
                        header={'Join us'}>
                        <CardContainer>
                            <Card
                                cardHeader={'Flexibility'}
                                cardPhoto={<CardFrihed />}
                                cardBody={`Jobs tailored to your preferences. You can choose your own schedule at GoWork.  
                                    `}
                            />
                            <Card
                                cardHeader={'Competence'}
                                cardPhoto={<CardKompetence />}
                                cardBody={`Test your skills and abilities to increase your marketability. We will match you with exciting jobs and projects. `}
                            />
                            <Card
                                cardHeader={'TEAM'}
                                cardPhoto={<CardTeam />}
                                cardBody={`Become part of an active and informal team on a joint mission – we are creating a more personalized work life.`}
                            />
                        </CardContainer>
                    </OneColumnDiv>
                    <CarouselContainer
                        header={'What do our temps say about us?'}>
                        <Carousel
                            slide1={`As a temp at GoWork, I get to stay physically active, my employers show confidence in me, and I am offered responsibilities. My shifts are always adjusted to fit my own schedule.`}
                            vikarPhoto1={<VikarPhotos.VikarPhotoMathias />}
                            slide1Name={'Mathias'}
                            jobTitle1={'Warehouse employee'}
                            slide2={`GoWork is an attentive temp agency who is easy to contact when I need them. I am placed on equal terms with the permanent employees when I’m at work, and I can feel my work is appreciated.`}
                            vikarPhoto2={<VikarPhotos.VikarPhotoKatrine />}
                            slide2Name={'Katrine'}
                            jobTitle2={'Webshop support'}
                            slide3={`It has been a pleasure being a temp for GoWork. At work, I had a great time talking to clients and customers while surrounded by like-minded colleagues.`}
                            vikarPhoto3={<VikarPhotos.VikarPhotoMagnus />}
                            slide3Name={'Magnus'}
                            jobTitle3={'Customer service and exam supervisor'}
                        />
                    </CarouselContainer>
                </div>
            </React.Fragment>
        );
    }
}

export default Vikar;
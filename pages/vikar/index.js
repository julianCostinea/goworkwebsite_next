import React, { Component } from 'react';
import Head from 'next/head';

import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import TwoColumnDiv from '../../components/TwoColumnDiv/TwoColumnDiv';
import { VikarPhoto } from '../../components/ContentImages/JobLaptop';
import CardContainer from '../../components/Card/CardContainer';
import Avatar from '../../components/Avatar/Avatar';
import Card from '../../components/Card/Card';
import CardFrihed from '../../components/ContentImages/CardImages/CardFrihed';
import CardKompetence from '../../components/ContentImages/CardImages/CardKompetence';
import CardTeam from '../../components/ContentImages/CardImages/CardTeam';
import CarouselContainer from '../../components/CarouselContainer/CarouselContainer';
import Carousel from '../../components/UI/Carousel/Carousel';
import * as VikarPhotos from '../../components/ContentImages/VikarPhotos/VikarPhotos';

import classes from './Vikar.module.css';

class Vikar extends Component {
    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>Jobsøgende</title>
                    <meta name="description" content="JOBSØGENDE SIDE" />
                </Head>
                <div className={classes.Content}>
                    <Avatar topRight vikarJob="Lager" AvatarPhoto={<VikarPhotos.VikarPhotoMathias />} />
                    <Avatar topLeft vikarJob="Support" AvatarPhoto={<VikarPhotos.VikarPhotoKatrine />} />
                    <Avatar bottomRight bottomRightLow vikarJob="Kundeservice" AvatarPhoto={<VikarPhotos.VikarPhotoMagnus />} />
                    <TwoColumnDiv
                        imageDiv={<VikarPhoto />}
                        buttonText={'Se stillinger'}
                        buttonLink={'/vikar/ledige-stillinger'}
                        button2Text={'Opret CV'}
                        button2Link={'/vikar/opret-cv'}
                        header={'Søger du\net fleksibelt job?'}
                        underText={'Læs mere om dine muligheder'}
                    >
                        Bliv GoWork’er! Få tilbudt vikarjobs
                        der passer til din hverdag,
                        som studerende, nyuddannet
                        eller specialist. <br /><br />
                    </TwoColumnDiv>
                    <OneColumnDiv
                        header={'Attention all doers'}
                        paragraph={`Vores vikar- og specialist team består af ambitiøse mennesker i starten af deres karriere, der springer til med kort varsel, har lyst til at møde nye virksomheder og kollegaer, samt nyder den frihed som jobs på vikarkontrakt giver. Lyder det som noget for dig? `}
                    >
                        Opret dit CV – hvis ikke nu, hvornår så?
                    </OneColumnDiv>
                    <OneColumnDiv
                        whiteDiv
                        header={'Join us'}>
                        <CardContainer>
                            <Card
                                cardHeader={'FRIHED'}
                                cardPhoto={<CardFrihed />}
                                cardBody={`Jobs der passer til din hverdag og dine ønsker.
                                    Hos os vælger du selv din arbejdsplan. 
                                    `}
                            />
                            <Card
                                cardHeader={'KOMPETENCE'}
                                cardPhoto={<CardKompetence />}
                                cardBody={`Få testet eller udviklet dine ’skills’ og øg din markedsværdi. Vi matcher dig med spændende jobs og projekter. `}
                            />
                            <Card
                                cardHeader={'TEAM'}
                                cardPhoto={<CardTeam />}
                                cardBody={`Bliv en del af et friskt og uformelt team på en fælles mission – vi skaber et friere arbejdsliv.`}
                            />
                        </CardContainer>
                    </OneColumnDiv>
                    <CarouselContainer
                        header={'Hvad siger vores vikarer om os?'}>
                        <Carousel
                            slide1={`Som vikar ved GoWork er jeg fysisk aktiv. Jeg oplever 
                            tillid fra arbejdspladserne, som giver mig ansvar. 
                            Mine vagter er altid tilpasset min kalender.`}
                            vikarPhoto1={<VikarPhotos.VikarPhotoMathias />}
                            slide1Name={'Mathias'}
                            jobTitle1={'Lagermedarbejder'}
                            slide2={`GoWork er et nærværende vikarbureau, jeg nemt kan komme i 
                            kontakt med. På min arbejdsplads, føler jeg mig ligeværdig med 
                            de ansatte og føler der bliver sat pris på mit arbejde.`}
                            vikarPhoto2={<VikarPhotos.VikarPhotoKatrine />}
                            slide2Name={'Katrine'}
                            jobTitle2={'Webshop support'}
                            slide3={`Det har været en fornøjelse at være vikar ved GoWork. 
                            På jobbet har det været rart at tale med kunder der gerne vil 
                            snakke med dig, i selskab af ligesindede kollegaer.`}
                            vikarPhoto3={<VikarPhotos.VikarPhotoMagnus />}
                            slide3Name={'Magnus'}
                            jobTitle3={'Kundeservice og eksamensvagt'}
                        />
                    </CarouselContainer>
                </div>
            </React.Fragment>
        );
    }
}

export default Vikar;
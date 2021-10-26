import React, { Component } from 'react';
import Head from 'next/head';

import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import CardContainer from '../../components/Card/CardContainer';
import TeamCard from '../../components/Card/TeamCard';
import * as TeamPhotos from '../../components/ContentImages/TeamPhotos/TeamPhotos';

import classes from './OmOs.module.css';

class OmOs extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Om os</title>
                    <meta name="description" content="Om os SIDE" />
                </Head>
                <div className={classes.Content}>
                    <OneColumnDiv
                        whiteDiv
                        header={'Kort om os'}
                        paragraph={`GoWork er et vikar- og specialistbureau med flere gazellepriser. 

                        Vi har siden 2012 formidlet ambitiøse mennesker i starten af deres karriere til midlertidige opgaver – lige fra den nyudklækkede student som søger ufaglært arbejde i sit sabbatår til den digitale marketing specialist med flere års erfaring der søger sit næste projekt.`}
                    >
                    </OneColumnDiv>

                    <OneColumnDiv
                        lightBlueDiv
                        header={'Vores Team'}
                    >
                        <CardContainer>
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoAnne />}
                                cardHeader={'Anne Jervelund'}
                                cardBody={'HR Konsulent'}
                            />
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoJonas />}
                                cardHeader={'Jonas Jeppesen'}
                                cardBody={'HR Konsulent'}
                            />
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoJulian />}
                                cardHeader={'Julian Costinea'}
                                cardBody={'HR Konsulent'}
                            />
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoErik />}
                                cardHeader={'Erik Dreiøe'}
                                cardBody={'HR Konsulent'}
                            />
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoOle />}
                                cardHeader={'Ole Susé'}
                                cardBody={`Senior Konsulent \n& Indehaver`}
                            />
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoPeter />}
                                cardHeader={'Peter Prese'}
                                cardBody={'HR Konsulent'}
                            />
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoArne />}
                                cardHeader={'Arne Lauritzen'}
                                cardBody={'Senior Konsulent'}
                            />
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoTrine />}
                                cardHeader={'Trine le Fevre'}
                                cardBody={'Bogholder'}
                            />
                        </CardContainer>
                    </OneColumnDiv>
                    <OneColumnDiv
                        whiteDiv
                        header={'Bliv klar til fremtiden'}
                        paragraph={`Undgå en ’plads på tilskuerrækkerne’ i et arbejdsmarked under stærk forandring.

                    Fremtidens arbejdsbegreb bliver en flydende størrelse, hvor ’fast job’ erstattes af digitale arbejdspladser og midlertidige projekter. Det stiller krav til teknologi og forandringsparathed hos arbejdsgivere, og fleksibilitet hos arbejdstagere.

                    Hos GoWork forbereder vi dig på det der venter – og brænder for at bringe ambitiøse mennesker og virksomheder sammen, nu og i fremtiden. 

                    Bliv klar til fremtidens arbejdsmarked… eller, ja du kan også fortsætte i den samme gamle rille.`}
                    >
                    </OneColumnDiv>

                </div>
            </div>
        );
    }
}

export default OmOs;
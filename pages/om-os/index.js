import React, { Component } from 'react';
import Head from 'next/head';

import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import CardContainer from '../../components/Card/CardContainer';
import TeamCard from '../../components/Card/TeamCard';
import * as TeamPhotos from '../../components/ContentImages/TeamPhotos/TeamPhotos';

import classes from './OmOs.module.css';

class OmOs extends Component {
    render() {
        const pageTitle = "Om GoWork";
        const pageDescription = "GoWork hjælper arbejdsgivere og jobsøgende med at finde hinanden. Mød vores team her";
        return (
            <div>
                <Head>
                <title>{pageTitle}</title>
                    <meta name="description" content={pageDescription} />
                    <meta property="og:title" content={pageTitle} />
                    <meta property="og:description" content={pageDescription}/>
                    <meta name="twitter:title" content={pageTitle}/>
                    <meta name="twitter:description" content={{pageDescription}} />
                </Head>
                <div className={classes.Content}>
                    <OneColumnDiv
                        whiteDiv
                        header={'Kort om os'}
                        paragraph={`GoWork er et vikar- og specialistbureau med flere gazellepriser. 

                        Vi har siden 2012 formidlet ambitiøse mennesker i starten af deres karriere til midlertidige opgaver – lige fra den nyudklækkede student på sabbatår til den digitale marketing specialist med flere års erfaring der søger sit næste projekt.`}
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
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoEmil />}
                                cardHeader={'Emil Rylander'}
                                cardBody={'Økonomiassistent'}
                            />
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoKirstine />}
                                cardHeader={'Kirstine Stoksted '}
                                cardBody={'HR Assistent'}
                            />
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoMarie />}
                                cardHeader={'Marie Nørgaard'}
                                cardBody={'Studentermedhjælper'}
                            />
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoEmma />}
                                cardHeader={'Emma Aunsbak'}
                                cardBody={'Studentermedhjælper'}
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
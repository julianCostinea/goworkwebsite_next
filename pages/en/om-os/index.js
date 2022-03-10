import React, { Component } from 'react';
import Head from 'next/head';

import OneColumnDiv from '../../../components/OneColumnDiv/OneColumnDiv';
import CardContainer from '../../../components/Card/CardContainer';
import TwoColumnDiv from '../../../components/TwoColumnDiv/TwoColumnDiv';
import TeamCard from '../../../components/Card/TeamCard';
import OmOsImage1 from '../../../components/ContentImages/OmOsImage1';
import OmOsImage2 from '../../../components/ContentImages/OmOsImage2';
import * as TeamPhotos from '../../../components/ContentImages/TeamPhotos/TeamPhotos';
import TwoColumnRoundedDiv from '../../../components/TwoColumnRoundedDiv/TwoColumnRoundedDiv';

import classes from './om-os.module.css';

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
                    <meta property="og:description" content={pageDescription} />
                    <meta name="twitter:title" content={pageTitle} />
                    <meta name="twitter:description" content={{ pageDescription }} />
                </Head>
                <div className={classes.Content}>
                    <TwoColumnDiv
                        imageDiv={<OmOsImage1 />}
                        header={'About us'}>
                        GoWork is a temp agency with several Gazelle awards under its belt.<br /><br />
                        Since 2012, we have recruited ambitious people at the beginning of their careers for temporary assignments - from the newly hatched student during their gap years to the digital marketing specialist, with great experience, looking for the next project.
                    </TwoColumnDiv>
                    <OneColumnDiv
                        lightBlueDiv
                        header={'Our Team'}
                    >
                        <CardContainer>
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoAnne />}
                                cardHeader={'Anne Jervelund'}
                                cardBody={'HR Consultant '}
                            />
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoJonas />}
                                cardHeader={'Jonas Jeppesen'}
                                cardBody={'HR Consultant '}
                            />
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoJulian />}
                                cardHeader={'Julian Costinea'}
                                cardBody={'HR Consultant '}
                            />
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoErik />}
                                cardHeader={'Erik Dreiøe'}
                                cardBody={'HR Consultant '}
                            />
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoOle />}
                                cardHeader={'Ole Susé'}
                                cardBody={`Senior Consultant \n& Proprietor`}
                            />
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoPeter />}
                                cardHeader={'Peter Prese'}
                                cardBody={'HR Consultant'}
                            />
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoArne />}
                                cardHeader={'Arne Lauritzen'}
                                cardBody={'Senior Consultant'}
                            />
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoTrine />}
                                cardHeader={'Trine le Fevre'}
                                cardBody={'Accountant'}
                            />
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoEmil />}
                                cardHeader={'Emil Rylander'}
                                cardBody={'Finance Assistant'}
                            />
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoKirstine />}
                                cardHeader={'Kirstine Stoksted '}
                                cardBody={'HR Assistant'}
                            />
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoEmma />}
                                cardHeader={'Emma Aunsbak'}
                                cardBody={'Student Assistant'}
                            />
                            <TeamCard
                                cardPhoto={<TeamPhotos.CandidatePhotoSebastian />}
                                cardHeader={'Sebastian Rasmussen'}
                                cardBody={'Salgs Consultant'}
                            />
                        </CardContainer>
                    </OneColumnDiv>
                    <TwoColumnRoundedDiv
                        imageDiv={<OmOsImage2 />}
                        header={'Get ready for the future'}>
                        Avoid sitting in the audience while the labor market is undergoing a strong transformation.<br /><br />
                        The working concept of the future will be a fluid size, where ‘permanent jobs’ will be replaced by digital jobs and temporary projects. It places demands on technology and readiness for change among employers, and flexibility for workers.<br /><br />
                        At GoWork, we prepare you for what lies ahead - we are passionate about bringing ambitious people and companies together, now and in the future.<br /><br />
                        Get ready for the job market of the future… or, sure you can also continue in the same old groove.
                    </TwoColumnRoundedDiv>
                </div>
            </div>
        );
    }
}

export default OmOs;
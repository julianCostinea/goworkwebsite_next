import React, { Component } from 'react';

import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import CardContainer from '../../components/Card/CardContainer';
import Card from '../../components/Card/Card';
import * as TeamPhotos from '../../components/ContentImages/TeamPhotos/TeamPhotos';

import classes from './OmOs.module.css';

class OmOs extends Component {
    render() { 
        return ( 
          <div>
              <div className={classes.Content}>
                <OneColumnDiv
                    lightBlueDiv
                    header = {'Passion for fremtidens medarbejdere'}
                    paragraph={`Go:Work er et vikar- og freelancebureau.Vi har siden 2012 formidlet studerende og 
                        nyuddannede til vikariater- og studiejobs, og specialister til freelanceopgaver.\n
                        Vi er vilde med den energi og de ambitioner som definerer generation Y og Z.
                        Og brænder for at bringe talent og virksomhed sammen.`}
                >
                </OneColumnDiv>
                <OneColumnDiv
                    whiteDiv
                    header={'Vores team'}
                >
                    <CardContainer>
                        <Card 
                            cardPhoto = {<TeamPhotos.CandidatePhotoOle />}
                            cardHeader = {'Ole Susé'}
                            cardBody ={'Senior Konsulent & Indehaver'}
                            />
                        <Card 
                            cardPhoto = {<TeamPhotos.CandidatePhotoJonas />}
                            cardHeader = {'Jonas Jeppesen'}
                            cardBody ={'HR Konsulent'}
                            />
                        <Card 
                            cardPhoto = {<TeamPhotos.CandidatePhotoJulian />}
                            cardHeader = {'Julian Costinea'}
                            cardBody ={'HR Konsulent'}
                            />
                        <Card 
                            cardPhoto = {<TeamPhotos.CandidatePhotoErik />}
                            cardHeader = {'Erik Dreiøe'}
                            cardBody ={'HR Konsulent'}
                            />
                    </CardContainer>
                    <CardContainer>
                        <Card 
                            cardPhoto = {<TeamPhotos.CandidatePhotoIgnacio />}
                            cardHeader = {'Ignacio Gonzalez'}
                            cardBody ={'LUCHADOR'}
                            />
                        <Card 
                            cardPhoto = {<TeamPhotos.CandidatePhotoPeter/>}
                            cardHeader = {'Peter Prese'}
                            cardBody ={'HR Konsulent'}
                            />
                        <Card 
                            cardPhoto = {<TeamPhotos.CandidatePhotoArne/>}
                            cardHeader = {'Arne Lauritzen'}
                            cardBody ={'Senior Konsulent'}
                            />
                        <Card 
                            cardPhoto = {<TeamPhotos.CandidatePhotoTrine/>}
                            cardHeader = {'Trine le Fevre'}
                            cardBody ={'Bogholder'}
                            />
                    </CardContainer>
                </OneColumnDiv>
            </div>
          </div>  
        );
    }
}

export default OmOs;
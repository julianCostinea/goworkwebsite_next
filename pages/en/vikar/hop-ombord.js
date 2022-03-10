import React, { Component } from 'react';
import Head from 'next/head';

import OneColumnDiv from '../../../components/OneColumnDiv/OneColumnDiv';
import CardContainer from '../../../components/Card/CardContainer';
import TextCard from '../../../components/TextCard/TextCard';
import ApplicationProcessEng from '../../../components/ContentImages/ApplicationProcess/ApplicationProcessEng';

import classes from './hop-ombord.module.css';

class HopOmbord extends Component {
    render() {
        const pageTitle = "Find job | Read more about your options";
        const pageDescription = "We help you find your next job. Start your career at GoWork now.";
        return (
            <React.Fragment>
                <Head>
                    <title>{pageTitle}</title>
                    <meta name="description" content={pageDescription} />
                </Head>
                <div>
                    <div className={classes.Content}>
                        <OneColumnDiv
                            whiteDiv
                            header={'Application process'}
                            paragraph={`We are passionate about bringing ambitious people and companies together. Here is a brief description of a standard hiring process:`}
                        >
                            <div>
                                {/* <h2
                                style={{ color: '#2a5c91', marginTop: '2rem', fontSize: '1.5rem' }}
                            ></h2> */}
                                <ApplicationProcessEng />
                            </div>
                        </OneColumnDiv>
                        <OneColumnDiv
                            lightBlueDiv
                            header={'Areas of expertise'}
                            paragraph={`We have a dedicated focus on temporary jobs within sales, digital and creative, customer service, operations, exam supervision, finance, and administration. Here is an outline of some of the positions/tasks we solve:`}
                        >
                            <CardContainer alignLeft>
                                <TextCard
                                    cardHeader={`Sales & Costumer service:`}
                                    cardBody={'telephone interviewer, meeting planner, phoner, sales consultant, sales representatives, customer service, call center employee and customer advisor, and others'}
                                />
                                <TextCard
                                    cardHeader={'Digital & Creativity'}
                                    cardBody={'web designer, graphic designer, digital marketing specialist, content developer, marketing coordinator, email marketing, UX/UI designer and programming, and others'}
                                />
                                <TextCard
                                    cardHeader={'Warehouse & Production'}
                                    cardBody={'webshop warehouse, - pick / packing, shipping, receipt of goods, labeling, assembly and quality check, and others'}
                                />
                                <TextCard
                                    cardHeader={'Economy & Finance'}
                                    cardBody={'accountant, controller, business analyst, payroll specialist , and others'}
                                />
                            </CardContainer>
                        </OneColumnDiv>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default HopOmbord;
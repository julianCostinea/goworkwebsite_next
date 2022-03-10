import React, { Component } from 'react';
import Head from 'next/head';

import TwoColumnDiv from '../../../components/TwoColumnDiv/TwoColumnDiv';
import OkonomiPhoto from '../../../components/ContentImages/FagOmraderImages/OkonomiPhoto';
import OneColumnDiv from '../../../components/OneColumnDiv/OneColumnDiv';
import KontaktFormEng from '../../../components/KontaktForm/KontaktFormEng';

import classes from './ServicePage.module.css';

class Okonomi extends Component {
    render() {
        let pageDescription = "Hire an economic talent. With our wide network of graduates in economics and finance, you can safely leave the task to us. ";
        let pageTitle = "Companies | Economy";
        return (
            <React.Fragment>
                <Head>
                    <title>{pageTitle}</title>
                    <meta name="description" content={pageDescription} />
                    <meta property="og:title" content={pageTitle} />
                    <meta property="og:description" content={pageDescription}/>
                    <meta name="twitter:title" content={pageTitle}/>
                    <meta name="twitter:description" content={{pageDescription}} />
                </Head>
                <div className={classes.Content}>
                    <TwoColumnDiv
                        smallIconReverse
                        imageDiv={<OkonomiPhoto />}
                        header={`Economy &\n finance`}>
                        Hire an economic talent!<br /><br />
                        Are you missing a Controller, a Payroll Specialist, a Business Analyst, or other competent and reliable employees who can handle financial and financial tasks?<br /><br />
                        Us at GoWork can find them for you.<br /><br />
                        With our wide network of graduates in economics and finance, you can safely leave the task to us.<br /><br />
                        We select the right candidates for temporary and temporary-to-permanent assignments.
                    </TwoColumnDiv>
                    <OneColumnDiv
                        header={'Examples of the positions/tasks we solve:'}>
                        <div className={classes.List}>
                            <ul>
                                <li>Controller</li>
                                <li>Analysis</li>
                                <li>BI (Business Intelligence) </li>
                                <li>HR-Coordinators</li>
                            </ul>
                            <ul>
                                <li>HR partners</li>
                                <li>Payroll and HR Assistant</li>
                                <li>Debtor, Creditor And Financial Accounting</li>
                            </ul>
                        </div>
                    </OneColumnDiv>
                </div>
                <KontaktFormEng />
            </React.Fragment>
        );
    }
}

export default Okonomi;
import React, { Component } from 'react';
import Head from 'next/head';

import TwoColumnDiv from '../../../components/TwoColumnDiv/TwoColumnDiv';
import SalgPhoto from '../../../components/ContentImages/FagOmraderImages/SalgPhoto';
import OneColumnDiv from '../../../components/OneColumnDiv/OneColumnDiv';
import KontaktFormEng from '../../../components/KontaktForm/KontaktFormEng';
import MobileOnlyDash from '../../../util/MobileOnlyDash';

import classes from './ServicePage.module.css';

class Salg extends Component {
    render() {
        let pageDescription = "Hire a sales or customer service talent. We find the right talents for temporary and temporary-to-permanent assignments.";
        let pageTitle = "Companies | Sales";
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
                        imageDiv={<SalgPhoto />}
                        header={'Sales &\n costumer service'}>
                        Hire a sales or customer service talent!<br /><br />
                        The customer service staff, and your sales team, represent your company externally. That is why it is important to find the right people to handle the tasks.<br /> <br />
                        Sales talents and customer service staff can be difficult to find, as these tasks require not only professional skills, but also personal qualities such as perseverance, empathy, and compassion.<br /><br />
                        Our team finds just the right talents for temporary and temporary-to-permanent assignments.
                    </TwoColumnDiv>
                    <OneColumnDiv
                        header={'Examples of the positions/tasks we solve:'}>
                        <div className={classes.List}>
                            <ul>
                                <li>Telephone Interviewer</li>
                                <li>Meeting Planner</li>
                                <li>Phoner</li>
                                <li>Sales Consultant</li>
                            </ul>
                            <ul>
                                <li>Customer Service Employee</li>
                                <li>SoMe supporter</li>
                                <li>Teknisk supporter</li>
                                <li>Cell center Employee</li>
                            </ul>
                        </div>
                    </OneColumnDiv>
                </div>
                <KontaktFormEng />
            </React.Fragment>
        );
    }
}

export default Salg;
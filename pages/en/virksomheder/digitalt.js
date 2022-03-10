import React, { Component } from 'react';
import Head from 'next/head';

import TwoColumnDiv from '../../../components/TwoColumnDiv/TwoColumnDiv';
import DigitaltPhoto from '../../../components/ContentImages/FagOmraderImages/DigitaltPhoto';
import OneColumnDiv from '../../../components/OneColumnDiv/OneColumnDiv';
import KontaktFormEng from '../../../components/KontaktForm/KontaktFormEng';

import classes from './ServicePage.module.css';

class Digitalt extends Component {
    render() {
        let pageDescription = "Hire a digital or creative talent. We find the right candidates so that your company can strengthen its online presence";
        let pageTitle = "Companies | Digital";
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
                    <TwoColumnDiv
                        smallIconReverse
                        imageDiv={<DigitaltPhoto />}
                        header={'Digitalt & Kreativt'}>
                        Hire a digital or creative talent! <br /><br />
                        Generation Y and Z are special because they are digital natives. It creates some obvious opportunities - a digital generation for digital tasks! <br /><br />
                        GoWork has access to a large pool of digital and creative talents found among the country's students and specialist / freelance community.<br /><br />
                        We select and screen the right candidates for temporary and temporary-to-permanent assignments so that your company can strengthen its online presence.
                    </TwoColumnDiv>
                    <OneColumnDiv
                        header={'Examples of the positions/tasks we solve:'}>
                        <div className={classes.List}>
                            <ul>
                                <li>UX/UI designer</li>
                                <li>Webdesigner</li>
                                <li>Visual designer</li>
                                <li>Graphic designer</li>
                                <li>Digital marketing specialist</li>
                            </ul>
                            <ul>
                                <li>Email Marketing</li>
                                <li>Lyricist / Copywriters</li>
                                <li>Content Developer</li>
                                <li>Marketing Coordinator</li>
                                <li>Programming</li>
                            </ul>
                        </div>
                    </OneColumnDiv>
                </div>
                <KontaktFormEng />
            </React.Fragment>
        );
    }
}

export default Digitalt;
import React, {Component} from 'react';
import Head from 'next/head';

import TwoColumnDiv from '../../../components/TwoColumnDiv/TwoColumnDiv';
import LagerPhoto from '../../../components/ContentImages/FagOmraderImages/LagerPhoto';
import OneColumnDiv from '../../../components/OneColumnDiv/OneColumnDiv';
import KontaktFormEng from '../../../components/KontaktForm/KontaktFormEng';

import classes from './ServicePage.module.css';

class Okonomi extends Component {
    render() { 
        let pageDescription = "Hire active and energetic temps for your warehouse or production. High reliability of delivery and higher flexibility.";
        let pageTitle = "Companies | Warehouse";
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
                        imageDiv = {<LagerPhoto />}
                        header = {'Warehouse &\n production'}>
                   Hire active and energetic temps for your warehouse or production!<br/><br/>
                   Warehouse and production work is an important task that must be handled by qualified and reliable employees <br /><br/>
                   Our team quickly finds the right warehouse and production workers, so you can safely get to the end of the day&apos;s tasks and spend the time on what you are best at.<br/>
                    </TwoColumnDiv>
                    <OneColumnDiv 
                        header = {'Examples of the positions/tasks we solve:'}>
                        <div className = {classes.List}>
                            <ul>
                                <li>Webshop / warehouse</li>
                                <li>Labeling</li>
                                <li>Shipping</li>
                                <li>Pick / Packing employees</li>
                            </ul>
                            <ul>
                                <li>Assembly</li>
                                <li>Quality Check</li>
                                <li>Receipt of goods</li>
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
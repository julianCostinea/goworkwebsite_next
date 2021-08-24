import React, {Component} from 'react';

import TwoColumnDiv from '../../components/TwoColumnDiv/TwoColumnDiv';
import DigitaltPhoto from '../../components/ContentImages/FagOmraderImages/DigitaltPhoto';
import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import KontaktForm from '../../components/KontaktForm/KontaktForm';

import classes from './ServicePage.module.css';

class Digitalt extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className={classes.Content}>
                    <TwoColumnDiv
                        imageDiv = {<DigitaltPhoto />}
                        header = {'Digitalt & Kreativt'}>
                            Lej et digitalt eller kreativt talent!<br/><br/>
                            Generation Y og Z er specielle, fordi de er digitalt indfødte. <br/>
                            Det skaber helt nye muligheder - en digital generation<br/>
                            til digitale opgaver! <br/>
                            GoWork har adgang til en store pulje af digitale og<br/>
                            kreative talenter der findes blandt landets studerende og<br/>
                            freelance-community.<br/>
                            Vi udvælger og screener de helt rette kandidater til midlertidige<br/>
                            og midlertidige-til-permanente opgaver, så din virksomhed <br/>
                            kan få styrket sin online tilstedeværelse.
                    </TwoColumnDiv>
                    <OneColumnDiv 
                        header = {'Eksempler på de stillinger/opgaver vi løser'}>
                        <div className = {classes.List}>
                            <ul>
                                <li>UX/UI designer</li>
                                <li>Webdesigner</li>
                                <li>Visual designer</li>
                                <li>Grafisk designer</li>
                                <li>Digital marketing specialist</li>
                            </ul>
                            <ul>
                                <li>Email Marketing</li>
                                <li>Tekstforfattere</li>
                                <li>Content Developer</li>
                                <li>Marketing Coordinator</li>
                                <li>Programming</li>
                            </ul>
                        </div>
                    </OneColumnDiv>
                </div>
                <KontaktForm />
            </React.Fragment>
         );
    }
}
 
export default Digitalt;
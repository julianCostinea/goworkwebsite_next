import React, {Component} from 'react';

import TwoColumnDiv from '../../components/TwoColumnDiv/TwoColumnDiv';
import LagerPhoto from '../../components/ContentImages/FagOmraderImages/LagerPhoto';
import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import KontaktForm from '../../components/KontaktForm/KontaktForm';

import classes from './ServicePage.module.css';

class Okonomi extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className={classes.Content}>
                    <TwoColumnDiv
                        imageDiv = {<LagerPhoto />}
                        header = {'Lager &\n Produktion'}>
                   Lej friske vikarer til dit lager eller produktion!<br/><br/>
                   Lager og produktion er en vigtig opgave,<br/>
                   som skal varetages af kvalificerede og mødestabile<br/>
                   ansatte. Vores team finder hurtigt de helt rigtige<br/>
                   lager- og produktionsvikarer, så i kan komme <br />
                   sikkert i mål med dagens opgaver, og bruge tiden <br />
                   på det i er bedst til.<br/>
                    </TwoColumnDiv>
                    <OneColumnDiv 
                        header = {'Eksempler på de stillinger/opgaver vi løser'}>
                        <div className = {classes.List}>
                            <ul>
                                <li>Webshop-lager</li>
                                <li>Etikettering</li>
                                <li>Forsendelse</li>
                                <li>Plukke/Pakke medarbejdere</li>
                            </ul>
                            <ul>
                                <li>Montage</li>
                                <li>Kvalitetstjek</li>
                                <li>Varemodtagelse</li>
                            </ul>
                        </div>
                    </OneColumnDiv>
                </div>
                <KontaktForm />
            </React.Fragment>
         );
    }
}
 
export default Okonomi;
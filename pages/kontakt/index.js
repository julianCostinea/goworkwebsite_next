import React, {Component} from 'react';
import FacebookIcon from '../../components/Icons/facebookIcon';
import LinkedInIcon from '../../components/Icons/linkedInIcon';
import KontaktForm from '../../components/KontaktForm/KontaktForm';

import classes from './Kontakt.module.css';
import TwoColumnKontaktDiv from '../../components/TwoColumnKontaktDiv/TwoColumnKontaktDiv';

class Kontakt extends Component {
    state = {  }
    render() { 
        const kontaktData =
            <div className={classes.kontaktData}>
                <h3>Kontakt os </h3>
                Vi glæder os til at høre fra dig.<br/><br/>
                Tlf: 66 10 65 00<br/><br/>
                @: job@go-work.dk <br/><br/>
                Fjordsgade 11, 1. Sal, <br/><br/>
                5000 Odense C.<br/><br/><br/><br/>
                <strong>Følg os på de sociale medier</strong><br/><br/>
                <FacebookIcon/>
                <LinkedInIcon/>
            </div>
        const kontaktForm = <div>
                <h3>Skriv til os</h3>
                <KontaktForm noHeader/>
            </div>
        return (
            <div className={classes.Content}>
                <TwoColumnKontaktDiv 
                    leftDiv = {kontaktForm}
                    rightDiv = {kontaktData}
                    />
                <div className={classes.GoogleMaps}>
                    <div>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2265.735623208934!2d10.37225991606297!3d55.3975183268043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cdffacd3b5447%3A0xc121de3dbe8e10ab!2sFjordsgade+11%2C+5000+Odense!5e0!3m2!1sda!2sdk!4v1533647673702" 
                            width="100%" 
                            height="450" 
                            frameBorder="0"  
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Kontakt;
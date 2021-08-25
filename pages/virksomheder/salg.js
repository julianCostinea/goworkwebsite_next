import React, {Component} from 'react';

import TwoColumnDiv from '../../components/TwoColumnDiv/TwoColumnDiv';
import SalgPhoto from '../../components/ContentImages/FagOmraderImages/SalgPhoto';
import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import KontaktForm from '../../components/KontaktForm/KontaktForm';
import MobileOnlyDash from '../../util/MobileOnlyDash';

import classes from './ServicePage.module.css';

class Salg extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className={classes.Content}>
                    <TwoColumnDiv
                        imageDiv = {<SalgPhoto />}
                        header = {'Salg &\n Kundeservice'}>
                   Lej et salgs- eller kundeservicetalent!<br/><br/>
                   Kundeservicemedarbejdere, og jeres salgsteam, <br/>
                   repræsenterer jeres virksomhed udadtil. <br/>
                   Derfor er det vigtigt at finde de helt rigtige <br/>
                   personer til at varetage opgaverne.<br/> <br/>
                   Salgstalenter og kundeservicemedarbejdere <br/>
                   kan være svære at finde, da disse opgaver ikke bare kræver<br/>
                   faglige kompetencer, men også personlige egenskaber <br/>
                   som vedholdenhed, empati og indlevelse.<br/><br/>
                   Vores team finder de helt rigtige talenter til midlertidige <br/>
                   og midlertidige-til-permanente opgaver.
                    </TwoColumnDiv>
                    <OneColumnDiv 
                        header = {'Eksempler på de stillinger/opgaver vi løser'}>
                        <div className = {classes.List}>
                            <ul>
                                <li>Telefoninterviewer</li>
                                <li>Mødebooker</li>
                                <li>Phoner</li>
                                <li>Salgskonsulent</li>
                            </ul>
                            <ul>
                                <li>Kundeservice<MobileOnlyDash/>medarbejder</li>
                                <li>SoMe supporter</li>
                                <li>Teknisk supporter</li>
                                <li>Cell center medarbejder</li>
                            </ul>
                        </div>
                    </OneColumnDiv>
                </div>
                <KontaktForm />
            </React.Fragment>
         );
    }
}
 
export default Salg;
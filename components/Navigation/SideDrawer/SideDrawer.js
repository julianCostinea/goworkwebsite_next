import React from 'react';
//import BackdropContext from "../../../store/backdrop-context";

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import FacebookIcon from '../../Icons/facebookIcon';
import LinkedInIcon from '../../Icons/linkedInIcon';

const SideDrawer = ( props ) => {
    //const backdropCtx = useContext(BackdropContext)
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} style={{textAlign: 'center'}}>
                <nav>
                    <NavigationItems closeModal = {props.closed}/>
                </nav>
                <div className={classes.Footer}>
                    <h4 style={{marginLeft:'3px'}}>Følg os:</h4>
                    <FacebookIcon link ='https://www.facebook.com/goworkodense/' />
                    <LinkedInIcon link = 'https://dk.linkedin.com/company/go-work-aps'/>
                </div>
            </div>
        </Aux>
    );
};

export default SideDrawer;
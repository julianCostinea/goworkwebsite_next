import React from 'react';
//import BackdropContext from "../../../store/backdrop-context";

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import FacebookIcon from '../../Icons/facebookIcon';
import LinkedInIcon from '../../Icons/linkedInIcon';
import InstagramIcon from '../../Icons/instagramIcon';

const SideDrawer = (props) => {
    //const backdropCtx = useContext(BackdropContext)
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')} style={{ textAlign: 'center' }}>
                <nav>
                    {props.englishVersion ? <NavigationItems englishVersion closeModal={props.closed} /> : <NavigationItems closeModal={props.closed} />}
                </nav>
                <div className={classes.Footer}>
                    <FacebookIcon />
                    <LinkedInIcon />
                    <InstagramIcon />
                </div>
            </div>
        </Aux>
    );
};

export default SideDrawer;
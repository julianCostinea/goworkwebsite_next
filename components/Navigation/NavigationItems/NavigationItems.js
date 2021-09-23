import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Logo from '../../Logo/Logo';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <Logo />
        <NavigationItem clicked = {props.closeModal} link="/vikar">Jobsøgende</NavigationItem>
        <NavigationItem clicked = {props.closeModal} link="/virksomheder">Virksomheder</NavigationItem>
        <NavigationItem clicked = {props.closeModal} link="/uddannelser">Uddannelsessteder</NavigationItem>
        <NavigationItem clicked = {props.closeModal} link="/om-os">Om&nbsp;os</NavigationItem>
        <div className={classes.KontaktNav}>
            <NavigationItem 
                clicked = {props.closeModal}
                link="/kontakt">
                    Kontakt&nbsp;os
            </NavigationItem>
        </div>
    </ul>
);

export default NavigationItems;
import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Logo from '../../Logo/Logo';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <Logo />
        <NavigationItem link="/vikar">Jobsøgende</NavigationItem>
        <NavigationItem link="/virksomheder">Virksomheder</NavigationItem>
        <NavigationItem link="/uddannelser">Uddannelsessteder</NavigationItem>
        <NavigationItem link="/om-os">Om&nbsp;os</NavigationItem>
        <div className={classes.KontaktNav}>
            <NavigationItem 
                link="/kontakt">
                    Kontakt&nbsp;os
            </NavigationItem>
        </div>
    </ul>
);

export default NavigationItems;
import React, { useEffect, useState } from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Logo from '../../Logo/Logo';

const NavigationItems = (props) => {
    const [chosenLanguage, setChosenLanguage] = useState('');
    useEffect(() => {
        if (window.location.pathname.split('/')[1] === "en") {
            setChosenLanguage('english');
        } else {
            setChosenLanguage('');
        }
    })
    if (chosenLanguage === 'english') {
        return (
            <ul className={classes.NavigationItems}>
                <Logo link="/en/" clicked={props.closeModal} />
                <NavigationItem clicked={props.closeModal} link="/en/vikar">Find&nbsp;job</NavigationItem>
                <NavigationItem clicked={props.closeModal} link="/en/virksomheder">Companies</NavigationItem>
                <NavigationItem clicked={props.closeModal} link="/en/uddannelser">Schools</NavigationItem>
                <NavigationItem clicked={props.closeModal} link="/en/om-os">About&nbsp;us</NavigationItem>
                <div className={classes.KontaktNav}>
                    <NavigationItem
                        clicked={props.closeModal}
                        link="/en/kontakt">
                        Contact&nbsp;us
                    </NavigationItem>
                </div>
                <NavigationItem link={"/vikar"} clicked={props.closeModal}>
                    <div className={classes.LanguageFlag}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-dk" viewBox="0 0 512 512">
                            <path fill="#c8102e" d="M0 0h512.1v512H0z" />
                            <path fill="#fff" d="M144 0h73.1v512H144z" />
                            <path fill="#fff" d="M0 219.4h512.1v73.2H0z" />
                        </svg>
                    </div>
                </NavigationItem>
            </ul>
        )
    }
    return (
        <ul className={classes.NavigationItems}>
            <Logo link="/" clicked={props.closeModal} />
            <NavigationItem clicked={props.closeModal} link="/vikar">Jobsøgende</NavigationItem>
            <NavigationItem clicked={props.closeModal} link="/virksomheder">Virksomheder</NavigationItem>
            <NavigationItem clicked={props.closeModal} link="/uddannelser">Uddannelsessteder</NavigationItem>
            <NavigationItem clicked={props.closeModal} link="/om-os">Om&nbsp;os</NavigationItem>
            <div className={classes.KontaktNav}>
                <NavigationItem
                    clicked={props.closeModal}
                    link="/kontakt">
                    Kontakt&nbsp;os
                </NavigationItem>
            </div>
            <NavigationItem link={"/en/vikar"} clicked={props.closeModal}>
                <div className={classes.LanguageFlag}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-gb" viewBox="0 0 512 512">
                        <path fill="#012169" d="M0 0h512v512H0z" />
                        <path fill="#FFF" d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z" />
                        <path fill="#C8102E" d="m184 324 11 34L42 512H0v-3l184-185zm124-12 54 8 150 147v45L308 312zM512 0 320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z" />
                        <path fill="#FFF" d="M176 0v512h160V0H176zM0 176v160h512V176H0z" />
                        <path fill="#C8102E" d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z" />
                    </svg>
                </div>
            </NavigationItem>
        </ul>
    )
};

export default NavigationItems;
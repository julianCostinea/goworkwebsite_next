import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BackdropContext from "../../../../store/backdrop-context";


import classes from './NavigationItem.module.css';

const NavigationItem = (props) => {
    const router = useRouter();
    const backdropCtx = useContext(BackdropContext);
    // state={
    //     showDropdown: false
    // }
    // dropdownShow= () => {
    //     if (this.props.dropdownLedigeStillinger) {
    //         this.setState({
    //             showDropdown: true
    //         })
    //     }
    // }
    // dropdownHide = (event) => {
    //     if (this.props.dropdownLedigeStillinger) {
    //         if (event.target.id !== 'listItem' || event.target.id !=='navlink' || event.target.id !== 'dropdown') {
    //             this.setState({
    //                 showDropdown: false
    //             })
    //         }
    //     }
    // }

    // let attachedClasses = [classes.NavigationItem];
    // if (this.props.dropdownLedigeStillinger) {
    //     attachedClasses = [classes.NavigationItem, classes.Relative];
    // }
    return (
        <li
            className={classes.NavigationItem}
            // onMouseEnter={this.dropdownShow}
            // onMouseLeave={this.dropdownHide}
            id={'listItem'}
        >
            <Link
                id={'navlink'}
                href={props.link}
            >
                <a onClick={backdropCtx.hideBackdrop}
                    className={router.pathname == props.link ? classes.active : null}>
                    {props.children}
                </a>
            </Link>
            {/* {this.props.dropdownLedigeStillinger ? <Dropdown close={this.dropdownHide} open={this.state.showDropdown} /> : null} */}
        </li>
    )
}

export default NavigationItem;
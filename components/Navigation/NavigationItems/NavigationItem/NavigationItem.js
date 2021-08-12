import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Dropdown from '../Dropdown/Dropdown';

import classes from './NavigationItem.module.css';

class navigationItem extends Component {
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

    render() {
        // let attachedClasses = [classes.NavigationItem];
        // if (this.props.dropdownLedigeStillinger) {
        //     attachedClasses = [classes.NavigationItem, classes.Relative];
        // }
        return (
            <li
                className={classes.NavigationItem}
                onMouseEnter={this.dropdownShow}
                onMouseLeave={this.dropdownHide}
                id={'listItem'}
            >
                <Link
                    id={'navlink'}
                    href={this.props.link}
                >
                    <a onClick={this.props.clicked} 
                        className={this.props.router.pathname == this.props.link ? classes.active : null}>
                            {this.props.children}
                    </a>
                </Link>
                {this.props.dropdownLedigeStillinger ? <Dropdown close={this.dropdownHide} open={this.state.showDropdown} /> : null}
            </li>
        )
    }
}

export default withRouter(navigationItem);
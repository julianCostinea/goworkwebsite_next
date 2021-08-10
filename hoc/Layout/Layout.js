import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';


class Layout extends Component {
    state = {
        showBoxShadow: false,
        showSideDrawer: false
    }
    showBoxShadowOnScroll = () => {
        this.setState({ showBoxShadow: true });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.showBoxShadowOnScroll, { once: true });
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar showBox={this.state.showBoxShadow} drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <Footer />
            </Aux>
        )
    }
}

export default Layout;
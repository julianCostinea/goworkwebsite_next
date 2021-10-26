import React, { Component } from "react";
import { BackdropContextProvider } from "../../store/backdrop-context";

import Aux from "../Auxiliary/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/UI/Modal/Modal";

class Layout extends Component {
  state = {
    showBoxShadow: false,
    showModal: false,
    showSideDrawer: false,
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };

  showBoxShadowOnScroll = () => {
    this.setState({ showBoxShadow: true });
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  componentDidMount() {
    if (!sessionStorage.getItem("sessionHideModal")) {
      if (window.location.pathname !== "/") {
        sessionStorage.setItem("sessionHideModal", true);
      }
    }
    if (!sessionStorage.getItem("sessionHideModal")) {
      setTimeout(() => {
        this.setState({ showModal: true });
      }, 500);
      sessionStorage.setItem("sessionHideModal", true);
    }
    if (this.state.showModal) {
      document.body.style.overflowY = "hidden";
      document.querySelector("#__next").style.paddingRight = "15px";
    } else {
      document.body.style.overflowY = "auto";
      document.querySelector("#__next").style.paddingRight = "0px";
    }
    window.addEventListener("scroll", this.showBoxShadowOnScroll, {
      once: true,
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.showBoxShadowOnScroll);
  }

  render() {
    return (
      <Aux>
        <BackdropContextProvider>
          <div className="grid">
            <Modal show={this.state.showModal} modalClosed={this.closeModal} />
            <Toolbar
              showBox={this.state.showBoxShadow}
              drawerToggleClicked={this.sideDrawerToggleHandler}
            />
            <SideDrawer
              open={this.state.showSideDrawer}
              closed={this.sideDrawerClosedHandler}
            />
            <main className={classes.Content}>{this.props.children}</main>
            <Footer />
          </div>
        </BackdropContextProvider>
      </Aux>
    );
  }
}

export default Layout;

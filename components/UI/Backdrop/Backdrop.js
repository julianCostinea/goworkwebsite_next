import React, { useContext } from "react";
import BackdropContext from "../../../store/backdrop-context";

import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  const backdropCtx = useContext(BackdropContext);
  return backdropCtx.show ? (
    <div className={classes.Backdrop} onClick={backdropCtx.hideBackdrop}></div>
  ) : null;
};

export default Backdrop;

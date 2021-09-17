import React from "react";

import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  //const backdropCtx = useContext(BackdropContext);

  return (
    props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null )
};

export default Backdrop;

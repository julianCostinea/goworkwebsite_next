import React, { useContext } from "react";
//import BackdropContext from "../../../../store/backdrop-context";

import classes from "./DrawerToggle.module.css";

const DrawerToggle = (props) => {
  //const backdropCtx = useContext(BackdropContext);

  return (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;

import React, { Fragment } from "react";

import classes from "./loader.module.css";

const Loader = (props) => {
  return (
    <Fragment>
      <label htmlFor="" className={classes.label}>
        <div className={classes.checkIcon}></div>
      </label>
    </Fragment>
  );
};

export default Loader;

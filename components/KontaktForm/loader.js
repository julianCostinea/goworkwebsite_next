import React, { Fragment, useState } from "react";

import classes from "./loader.module.css";

const Loader = (props) => {
  const hideCheckmark = !props.hideCheckmark;

  let loaderClasses = [classes.label];
  if (!hideCheckmark) {
    loaderClasses = [classes.label, classes.labelConfirmed]
  }
  return (
    <Fragment>
      <label htmlFor="" className={loaderClasses.join(' ')}>
        <div 
          className={classes.checkIcon} 
          style = {{display: hideCheckmark ? 'none' : 'block'}}>
          </div>
      </label>
    </Fragment>
  );
};

export default Loader;

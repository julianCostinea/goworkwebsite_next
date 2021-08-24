import React from "react";

import classes from "./CarouselContainer.module.css";

const ClientVideoDiv = (props) => {
  let attachedClasses = [classes.Container];
  if (props.whiteDiv) {
    attachedClasses = [classes.Container, classes.White];
  }
  const formattedHeader = props.header
    .split("\n")
    .map((str, index) => <h4 key={index}>{str}</h4>);
  return (
    <div className={attachedClasses.join(" ")}>
      <div className={classes.Header}>{formattedHeader}</div>
      {props.children}
    </div>
  );
};

export default ClientVideoDiv;

import React from "react";

import classes from "./Input.module.css";

const input = (props) => {
  let InputElement = null;

  let errorMessage = "";

  if (props.invalid && props.touched) {
    errorMessage = (
      <span className={classes.InputElement__errorMessage}>
        {props.errorMessage}
      </span>
    );
  }

  switch (props.elementType) {
    case "input":
      InputElement = (
        <React.Fragment>
          <input
            required
            style={{
              borderColor: props.invalid && props.touched ? "red" : null,
            }}
            className={classes.InputElement}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
          {errorMessage}
        </React.Fragment>
      );
      break;
    case "textarea":
      InputElement = (
        <React.Fragment>
          <textarea
            required
            style={{
              borderColor: props.invalid && props.touched ? "red" : null,
            }}
            className={[classes.InputElement, classes.InputTextarea].join(" ")}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
          {errorMessage}
        </React.Fragment>
      );
      break;
    case "noHoney":
      InputElement = (
        <React.Fragment>
          <input
            className={classes.noHoney}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
        </React.Fragment>
      );
      break;
    default:
      InputElement = (
        <React.Fragment>
          <input
            required
            className={classes.InputElement}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
          {errorMessage}
        </React.Fragment>
      );
      break;
  }
  return (
    <div className={classes.Input}>
      <label htmlFor={props.id}>{props.icon}{props.label}</label>
      {InputElement}
    </div>
  );
};

export default input;

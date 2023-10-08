import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.state.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.inputFor}>{props.label}</label>
      <input
        type={props.inputFor}
        id={props.inputFor}
        value={props.state.value}
        onChange={props.onChange}
        onBlur={props.onBlue}
      />
    </div>
  );
};

export default Input;

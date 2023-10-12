import React, { useRef } from "react";
import classes from "./Checkout.module.css";

const CheckOut = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const nameValue = nameInputRef.current.value;
    const streetValue = streetInputRef.current.value;
    const postalCodeValue = postalCodeInputRef.current.value;
    const cityValue = cityInputRef.current.value;

    console.log(nameValue, streetValue, postalCodeValue, cityValue);
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input id="street" type="text" ref={streetInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal_code">Postal Code</label>
        <input id="postal_code" type="text" ref={postalCodeInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input id="city" type="text" ref={cityInputRef} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default CheckOut;

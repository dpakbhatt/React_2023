import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const CheckOut = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postal_code: true,
    city: true,
  });

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

    const isNameValid = !isEmpty(nameValue);
    const isStreetValid = !isEmpty(streetValue);
    const isPostalCodeValid = isFiveChars(postalCodeValue);
    const isCityValid = !isEmpty(cityValue);

    setFormInputValidity({
      name: isNameValid,
      street: isStreetValid,
      postal_code: isPostalCodeValid,
      city: isCityValid,
    });

    const formIsValid =
      isNameValid && isStreetValid && isPostalCodeValid && isCityValid;

    if (!formIsValid) {
      return;
    }
  };

  const nameInputClasses = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  }`;

  const streetInputClasses = `${classes.control} ${
    formInputValidity.street ? "" : classes.invalid
  }`;

  const postalCodeInputClasses = `${classes.control} ${
    formInputValidity.postal_code ? "" : classes.invalid
  }`;

  const cityInputClasses = `${classes.control} ${
    formInputValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" ref={nameInputRef} />
        {!formInputValidity.name && <p>Name must not be empty!</p>}
      </div>
      <div className={streetInputClasses}>
        <label htmlFor="street">Street</label>
        <input id="street" type="text" ref={streetInputRef} />
        {!formInputValidity.street && <p>Street must not be empty!</p>}
      </div>
      <div className={postalCodeInputClasses}>
        <label htmlFor="postal_code">Postal Code</label>
        <input id="postal_code" type="text" ref={postalCodeInputRef} />
        {!formInputValidity.postal_code && (
          <p>Postal code must be of 5 digits!</p>
        )}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input id="city" type="text" ref={cityInputRef} />
        {!formInputValidity.city && <p>City must not be empty!</p>}
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

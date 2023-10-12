import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const enteredInputIsValid = validateValue(enteredInput);
  const hasError = !enteredInputIsValid && isTouched;

  const inputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredInput("");
    setIsTouched(false);
  };

  return {
    value: enteredInput,
    isValid: enteredInputIsValid,
    hasError: hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;

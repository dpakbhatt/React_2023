import { useReducer } from "react";

const initalInputState = {
  value: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  } else if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: true,
    };
  } else if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
};

const useInput = (validateValue) => {
  const [inputState, dispatchFunc] = useReducer(inputReducer, initalInputState);

  const enteredInputIsValid = validateValue(inputState.value);
  const hasError = !enteredInputIsValid && inputState.isTouched;

  const inputChangeHandler = (event) => {
    dispatchFunc({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatchFunc({ type: "BLUR" });
  };

  const reset = () => {
    dispatchFunc({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: enteredInputIsValid,
    hasError: hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;

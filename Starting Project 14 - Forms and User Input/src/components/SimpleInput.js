import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: nameInput,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailInput,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    // if (!enteredNameIsValid && !enteredEmailIsValid) {
    //   return;
    // }
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = !nameHasError
    ? "form-control"
    : "form-control invalid";

  const emailInputClasses = !emailHasError
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameInput}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={emailInput}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

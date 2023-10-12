import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: fNameInput,
    isValid: enteredFNameIsValid,
    hasError: fNameHasError,
    inputChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: resetFNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lNameInput,
    isValid: enteredLNameIsValid,
    hasError: lNameHasError,
    inputChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: resetLNameInput,
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

  if (enteredFNameIsValid && enteredEmailIsValid && enteredLNameIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetFNameInput();
    resetLNameInput();
    resetEmailInput();
  };

  const fNameInputClasses = !fNameHasError
    ? "form-control"
    : "form-control invalid";

  const lNameInputClasses = !lNameHasError
    ? "form-control"
    : "form-control invalid";

  const emailInputClasses = !emailHasError
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={fNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={fNameInput}
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler}
          />
          {fNameHasError && (
            <p className="error-text">First name must not be empty.</p>
          )}
        </div>
        <div className={lNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lNameInput}
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
          />
          {lNameHasError && (
            <p className="error-text">Last name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
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

export default BasicForm;

import { useState } from "react";
import { useRef } from "react";

export default function RefLogin() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    console.log(enteredEmail, enteredPassword);

    const emailIsValid = enteredEmail.includes("@");
    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }

    setEmailIsInvalid(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={emailRef} />
          {emailIsInvalid && (
            <div className="control-error">
              Please enter a valid email address.
            </div>
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

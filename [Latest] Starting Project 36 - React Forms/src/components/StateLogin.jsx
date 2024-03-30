import { useState } from "react";
import Input from "./Input";

export default function StateLogin() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
  const passwordIsInvalid =
    didEdit.password && !(enteredValues.password.trim().length > 6);

  function handleSubmit(event) {
    event.preventDefault();
    if (emailIsInvalid || passwordIsInvalid) {
      return;
    }
    console.log(enteredValues);
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidEdit((prevValues) => ({
      ...prevValues,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevValues) => ({
      ...prevValues,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          value={enteredValues.email}
          onChange={(event) => handleInputChange("email", event.target.value)}
          onBlur={() => handleInputBlur("email")}
          error={emailIsInvalid && "Please enter a valid email!"}
        />

        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          value={enteredValues.password}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          onBlur={() => handleInputBlur("password")}
          error={
            passwordIsInvalid && "Password must have 6 or more characters!"
          }
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

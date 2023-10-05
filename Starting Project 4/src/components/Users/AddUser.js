import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    const inputValues = {
      name: enteredUsername,
      age: enteredAge,
      id: Math.random().toString(),
    };
    props.userAdded(inputValues);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameHandler}
          value={enteredUsername}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={ageHandler}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;

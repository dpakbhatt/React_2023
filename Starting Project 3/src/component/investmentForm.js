import React, { useState } from "react";
import classes from "./InvestmentForm.module.css";

const InvestmentForm = (props) => {
  const [csValue, setcsValue] = useState(null);
  const [ysValue, setysValue] = useState(null);
  const [eiValue, seteiValue] = useState(null);
  const [idValue, setidValue] = useState(null);

  const currentSavingsHandler = (event) => {
    if (event.target.value) {
      setcsValue(event.target.value);
    }
  };

  const yearlySavingsHandler = (event) => {
    if (event.target.value) {
      setysValue(event.target.value);
    }
  };

  const expectedInterestHandler = (event) => {
    if (event.target.value) {
      seteiValue(event.target.value);
    }
  };

  const investmentDurationHandler = (event) => {
    if (event.target.value) {
      setidValue(event.target.value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const investmentData = {
      currentSavings: +csValue,
      yearlyContribution: +ysValue,
      expectedReturn: +eiValue,
      duration: +idValue,
    };

    props.onSubmit(investmentData);
  };

  const resetHandler = (event) => {
    event.preventDefault();
    setcsValue(null);
    setysValue(null);
    seteiValue(null);
    setidValue(null);
    props.onReset();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={csValue}
            onChange={currentSavingsHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={ysValue}
            onChange={yearlySavingsHandler}
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={eiValue}
            onChange={expectedInterestHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={idValue}
            onChange={investmentDurationHandler}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          className={classes.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;

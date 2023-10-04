import React, { useState } from "react";
import "./investmentForm.css";

const InvestmentForm = (props) => {
  const [csValue, setcsValue] = useState("");
  const [ysValue, setysValue] = useState("");
  const [eiValue, seteiValue] = useState("");
  const [idValue, setidValue] = useState("");

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
      currentSavings: csValue,
      yearlyContribution: ysValue,
      expectedReturn: eiValue,
      duration: idValue,
    };

    props.onSubmit(investmentData);
  };

  const resetHandler = (event) => {
    event.preventDefault();
    setcsValue("");
    setysValue("");
    seteiValue("");
    setidValue("");
    props.onReset();
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
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
      <div className="input-group">
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
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;

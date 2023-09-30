import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const submitHandler = (expenseData) => {
    const expenseDataObj = {
      ...expenseData,
      id: Math.random().toString(),
    };
    console.log("Running in NewExpense.js: ", expenseDataObj);
    props.onNewExpenseAdded(expenseDataObj);
    return expenseDataObj;
  };

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseDataSubmit={submitHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;

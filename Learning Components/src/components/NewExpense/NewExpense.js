import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const submitHandler = (expenseData) => {
    const expenseDataObj = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onNewExpenseAdded(expenseDataObj);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const cancelHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onExpenseDataSubmit={submitHandler}
          onCancel={cancelHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;

import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selectedYear, setYear] = useState("2020");

  const handleYearSelection = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onYearSelect={handleYearSelection}
        />
        <ExpensesList filteredData={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

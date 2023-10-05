import React from "react";
import classes from "./ResultTable.module.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ResultTable = (props) => {
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Invested Capital</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Total Savings</th>
        </tr>
      </thead>

      <tbody>
        {props.data.map((year) => {
          return (
            <tr key={year.year}>
              <td>{year.year}</td>
              <td>
                {formatter.format(
                  props.initialInvestment + year.yearlyContribution * year.year
                )}
              </td>
              <td>{formatter.format(year.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  year.savingsEndOfYear -
                    props.initialInvestment -
                    year.yearlyContribution * year.year
                )}
              </td>
              <td>{formatter.format(year.savingsEndOfYear)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultTable;

import { useState } from "react";
import Header from "./component/Header";
import InvestmentForm from "./component/InvestmentForm";
import ResultTable from "./component/ResultTable";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlyContribution;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  const resetHandler = () => {
    setUserInput(null);
  };

  return (
    <div>
      <Header />
      <InvestmentForm onSubmit={calculateHandler} onReset={resetHandler} />

      {!userInput && (
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          No investment calculated yet.
        </p>
      )}
      {userInput && (
        <ResultTable
          data={yearlyData}
          initialInvestment={userInput.currentSavings}
        />
      )}
    </div>
  );
}

export default App;

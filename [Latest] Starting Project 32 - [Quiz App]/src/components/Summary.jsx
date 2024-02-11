import QuizCompleted from "../assets/quiz-complete.png";
import QuizQuestions from "../questions";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QuizQuestions[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / QuizQuestions.length) * 100
  );

  const correctAnswersShare = Math.round(
    (correctAnswers.length / QuizQuestions.length) * 100
  );

  const incorrectAnswersShare = Math.round(
    100 - skippedAnswersShare - correctAnswersShare
  );

  return (
    <div id="summary">
      <img src={QuizCompleted} alt="Quiz completed Image" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{incorrectAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QuizQuestions[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QuizQuestions[index].text}</p>
              <p className={cssClass}>{answer ? answer : "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

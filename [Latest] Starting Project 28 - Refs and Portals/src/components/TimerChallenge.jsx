import { useRef, useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const [isTimerExpired, setIsTimerExpired] = useState(false);
  const [isTimerStarted, setIsTimerStarted] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setIsTimerExpired(true);
    }, targetTime * 1000);

    setIsTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setIsTimerStarted(false);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {isTimerExpired && <p>You lost</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={isTimerStarted ? handleStop : handleStart}>
          {isTimerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={isTimerStarted ? "active" : undefined}>
        {isTimerStarted ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
}

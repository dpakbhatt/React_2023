import { useEffect } from "react";
import { useState } from "react";

export default function QuestionTimer({ timer, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setRemainingTime((prevValue) => prevValue - 10);
    }, 10);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(onTimeout, timer);

    return () => {
      clearTimeout(timeOut);
    };
  }, [timer, onTimeout]);

  return <progress value={remainingTime} max={timer} id="question-time" />;
}

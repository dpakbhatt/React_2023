import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [timerValue, setTimerValue] = useState(timer);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTimerValue((prveValue) => prveValue - 10);
    }, 10);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return <progress value={timerValue} max={timer} />;
}

import { useEffect, useState } from "react";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [timerValue, setTimerValue] = useState(TIMER);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTimerValue((prveValue) => prveValue - 10);
    }, 10);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      clearTimeout(timeOut);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={timerValue} max={TIMER} />
    </div>
  );
}

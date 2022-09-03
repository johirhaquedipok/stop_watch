import React, { useEffect, useState } from "react";
import Buttons from "../Buttons/buttons";
import Timer from "../timer/timer";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="stopwatch_container">
      <p className="text">Stopwatch</p>
      <div>
        <div className="time">
          <Timer time={time} />
        </div>
        <div className="buttons">
          <Buttons setRunning={setRunning} setTime={setTime} />
        </div>
      </div>
    </div>
  );
};

export default StopWatch;

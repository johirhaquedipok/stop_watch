import React, { useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(133333330);

  return (
    <div>
      <h2>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </h2>
      <div className="buttons">
        {/* <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button> */}
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
};

export default StopWatch;

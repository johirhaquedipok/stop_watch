import React from "react";

const Buttons = ({ setRunning, setTime }) => {
  return (
    <div>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setTime(0)}>Reset</button>
      <button onClick={() => setRunning(false)}>Stop</button>
    </div>
  );
};

export default Buttons;

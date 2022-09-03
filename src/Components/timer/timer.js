import React from "react";

const Timer = ({ time }) => {
  return (
    <div>
      <h2 className="watch_text">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </h2>
    </div>
  );
};

export default Timer;

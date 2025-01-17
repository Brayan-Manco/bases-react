import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleSum = () => {
    // setCounter( counter + 1);
    setCounter((c) => c + 1);
  };

  const handleRest = () => setCounter( counter - 1);

  const handleReset = () => setCounter( value );
  
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleSum}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleRest}>-1</button>
    </>
  );
};

CounterApp.prototype = {
  value: PropTypes.number.isRequired,
};

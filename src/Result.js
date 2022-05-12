import React from "react";

export const Result = ({ inputDate, randomDate, isInputDateChange }) => {
  const result =
    100 -
    Math.floor(
      (Math.abs(inputDate.diff(randomDate, "milliseconds")) / randomDate) * 100
    );
  return (
    <div>
      {" "}
      {isInputDateChange ? <p>You got: {result}</p> : <p>Enter a date</p>}
    </div>
  );
};

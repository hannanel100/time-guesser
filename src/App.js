import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";

import { RandomDate } from "./RandomDate";
import dayjs from "dayjs";
import { Result } from "./Result";

function App() {
  const [randomDate, setRandomDate] = useState(dayjs());
  const [inputDate, setInputDate] = useState(dayjs());
  const [isInputDateChange, setIsInputDateChange] = useState(false);
  function getRandomDate() {
    const maxDate = dayjs().valueOf();
    const timestamp = Math.floor(Math.random() * maxDate);
    return dayjs(timestamp);
  }
  const inputDateHandler = (e) => {
    console.log(e);
    setInputDate(e);
    setIsInputDateChange(true);
  };
  useEffect(() => {
    setRandomDate(getRandomDate());
  }, []);

  return (
    <div className='App'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className='container'>
          <h1>Guess the ECMAScript epoch date!</h1>
          <RandomDate miliseconds={randomDate.valueOf()} />
          <DatePicker
            value={inputDate.format("YYYY-MM-DD")}
            onChange={inputDateHandler}
            renderInput={(params) => <TextField {...params} />}
          />

          <Result
            inputDate={inputDate}
            randomDate={randomDate}
            isInputDateChange={isInputDateChange}
          />
          
        </div>
      </LocalizationProvider>
    </div>
  );
}

export default App;

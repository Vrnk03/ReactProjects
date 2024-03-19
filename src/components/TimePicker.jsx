import React, { useState } from "react";

function TimePicker(props) {
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();

  const handleHourChange = (e) => {
    setHours(parseInt(e.target.value));
    props.postHour(parseInt(e.target.value));
  };

  const handleMinuteChange = (e) => {
    setMinutes(parseInt(e.target.value));
    props.postMin(parseInt(e.target.value));
  };

  const createRange = (len) => {
    return Array.from({ length: len }, (_, i) => i);
  };

  const selectTemplate = (val, handler, rangeLimit) => {
    return (
      <select value={val} onChange={handler}>
        {createRange(rangeLimit).map((val, i) => {
          return (
            <option key={i} value={val}>
              {val.toString().padStart(2, "0")}
            </option>
          );
        })}
      </select>
    );
  };

  return (
    <div>
      {selectTemplate(hours, handleHourChange, 24)}:
      {selectTemplate(minutes, handleMinuteChange, 60)}
    </div>
  );
}

export default TimePicker;

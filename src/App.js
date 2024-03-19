import "./App.css";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import NotesList from "./components/NotesList";

function App() {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="App">
      <h2>Calendar with notes</h2>

      <div className="content">
        <div className="calendar">
          <DayPicker selected={selectedDay} onDayClick={handleDayClick} />
        </div>
        {selectedDay && <NotesList selectedDay={selectedDay} />}
      </div>
    </div>
  );
}

export default App;

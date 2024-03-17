import React, { useState } from 'react';
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function Calendar() {

    const [selectedDay, setSelectedDay] = useState();

    const handleDayClick = (day) => {
        setSelectedDay(day);
    };

    return (
        <div>
        <h2>Calendar with notes</h2>
        <DayPicker
            selected={selectedDay}
            onDayClick={handleDayClick}
        />
        </div>
    );
}

export default Calendar;

import React, { useState } from "react";
import "../styles/addModal.css";
import TimePicker from "./TimePicker";

function AddModal(props) {
  const [open, setOpen] = useState(props.open);
  const [note, setNote] = useState("");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const getHour = (val) => setHours(val);
  const getMin = (val) => setMinutes(val);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (note.trim() === "") alert("Enter text of note please");
    else props.addNote(hours, minutes, note);
  };

  return (
    open && (
      <div className="overlay">
        <div className="modal">
          <svg
            onClick={() => setOpen(props.close)}
            height="200"
            viewBox="0 0 200 200"
            width="200"
          >
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <form onSubmit={handleSubmit}>
            <TimePicker postHour={getHour} postMin={getMin} />
            <textarea
              onChange={(e) => setNote(e.target.value)}
              placeholder="Enter your note"
            ></textarea>
            <input className="btn" type="submit" value="Add note" />
          </form>
        </div>
      </div>
    )
  );
}

export default AddModal;

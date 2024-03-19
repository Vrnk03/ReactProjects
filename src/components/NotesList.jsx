import "../styles/noteList.css";
import React, { useState } from "react";
import NoteItem from "./NoteItem";
import AddModal from "./AddModal";
import { format } from "date-fns";

function NotesList(props) {
  const [notes, setNotes] = useState([
    {
      date: new Date(2024, 2, 8, 18, 0),
      text: "Go in restaran",
    },
    {
      date: new Date(2024, 2, 8, 21, 0),
      text: "Go in clab",
    },
    {
      date: new Date(2024, 2, 10, 10, 0),
      text: "Go in shop",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const addNote = (hour, min, nodeText) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        date: new Date(
          props.selectedDay.getFullYear(),
          props.selectedDay.getMonth(),
          props.selectedDay.getDate(),
          hour,
          min
        ),
        text: nodeText,
      },
    ]);
    setIsOpen(false);
  };

  return (
    <div className="notesList">
      <h2>{format(props.selectedDay, "PP")}</h2>

      {notes.some(
        (item) => item.date.toDateString() === props.selectedDay.toDateString()
      ) ? (
        notes
          .filter(
            (item) =>
              item.date.toDateString() === props.selectedDay.toDateString()
          )
          .map((item, index) => <NoteItem key={index} values={item} />)
      ) : (
        <p>You haven't any notes</p>
      )}

      <button className="btn" onClick={handleOpenModal}>
        Add notes
      </button>

      {isOpen && (
        <AddModal open={isOpen} close={handleCloseModal} addNote={addNote} />
      )}
    </div>
  );
}

export default NotesList;

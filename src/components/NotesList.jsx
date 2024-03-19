import React, { useState } from "react";
import NoteItem from "./NoteItem";
import AddModal from "./AddModal";
import { format } from "date-fns";

function NotesList(props) {
  const notes = [
    {
      id: 1,
      date: new Date(2024, 2, 8, 18, 0),
      text: "Go in restaran",
    },
    {
      id: 2,
      date: new Date(2024, 2, 8, 21, 0),
      text: "Go in clab",
    },
    {
      id: 3,
      date: new Date(2024, 2, 10, 10, 0),
      text: "Go in shop",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <div style={{ backgroundColor: "#eee" }}>
      <h2>{format(props.selectedDay, "PP")}</h2>

      {notes.some(
        (item) => item.date.toDateString() === props.selectedDay.toDateString()
      ) ? (
        notes
          .filter(
            (item) =>
              item.date.toDateString() === props.selectedDay.toDateString()
          )
          .map((item) => <NoteItem key={item.id} values={item} />)
      ) : (
        <p>You haven't any notes</p>
      )}

      <button onClick={handleOpenModal}>Add notes</button>

      {isOpen && <AddModal open={isOpen} close={handleCloseModal} />}
    </div>
  );
}

export default NotesList;

import React from "react";
import NoteItem from "./NoteItem";

function NotesList(props) {
  const notes = [
    {
      id: 1,
      date: "Mar 8, 2024",
      text: "Go in restaran",
      time: "18:00",
    },
    {
      id: 2,
      date: "Mar 8, 2024",
      text: "Go in clab",
      time: "21:00",
    },
    {
      id: 3,
      date: "Mar 10, 2024",
      text: "Go in shop",
      time: "10:00",
    },
  ];

  const handleAddClick = () => {};

  return (
    <div style={{ backgroundColor: "#eee" }}>
      <h2>{props.selectedDay}</h2>

      {notes.some((item) => item.date === props.selectedDay) ? (
        notes
          .filter((item) => item.date === props.selectedDay)
          .map((item) => <NoteItem key={item.id} values={item} />)
      ) : (
        <p>You haven't any notes</p>
      )}

      <button>Add notes</button>
    </div>
  );
}

export default NotesList;

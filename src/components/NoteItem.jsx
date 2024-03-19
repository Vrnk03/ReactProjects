import React from "react";

function NoteItem(props) {
  return (
    <div>
      <p>
        {props.values.date.toString().match(/\b\d{2}:\d{2}\b/)}{" "}
        {props.values.text}
      </p>
    </div>
  );
}

export default NoteItem;

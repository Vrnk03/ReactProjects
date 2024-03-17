import React from "react";

function NoteItem(props) {
  return (
    <div>
      <p>
        {props.values.time} {props.values.text}
      </p>
    </div>
  );
}

export default NoteItem;

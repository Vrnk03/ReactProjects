import React from "react";

function NoteItem(props) {
  return (
    <div style={{ marginBottom: "25px" }}>
      <p style={{ borderBottom: "1px solid #1111116a", paddingBottom: "5px" }}>
        <span style={{ fontWeight: "500", marginRight: "7px" }}>
          {props.values.date.toString().match(/\b\d{2}:\d{2}\b/)}
        </span>{" "}
        {props.values.text}
      </p>
    </div>
  );
}

export default NoteItem;

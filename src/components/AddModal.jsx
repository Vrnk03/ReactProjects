import React, { useState } from "react";
import "../styles/addModal.css";

function AddModal(props) {
  const [open, setOpen] = useState(props.open);

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
          <form action="">
            <input type="text" />
          </form>
          <button onClick={() => setOpen(props.close)}>Add</button>
        </div>
      </div>
    )
  );
}

export default AddModal;

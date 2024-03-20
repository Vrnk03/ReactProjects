import React, { useState, useEffect } from "react";
import "../styles/colorBox.css";

function ColorBox(props) {
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    if (props.color.type === "HEX") setBackgroundColor(props.color.code);
    else if (props.color.type === "RGB")
      setBackgroundColor(`rgb(${props.color.code})`);
    else if (props.color.type === "RGBA")
      setBackgroundColor(`rgba(${props.color.code})`);
  }, [props.color]);

  return (
    <div className="figColor" style={{ backgroundColor }}>
      <div className="figColorInfo">
        <div className="text">
          <samp>{props.color.name.toUpperCase()}</samp>
          <samp>{props.color.type}</samp>
          <samp>{props.color.code}</samp>
        </div>
      </div>
    </div>
  );
}

export default ColorBox;

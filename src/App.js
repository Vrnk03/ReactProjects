import "./App.css";
import React, { useState, useEffect } from "react";
import ColorBox from "./components/ColorBox";

function App() {
  const [colors, setColors] = useState([]);

  const [name, setName] = useState("");
  const [type, setType] = useState("HEX");
  const [code, setCode] = useState("");

  const [colorNameErr, setColorNameErr] = useState("");
  const [colorCodeErr, setColorCodeErr] = useState("");

  useEffect(() => {
    const cookieColors = document.cookie
      .split(";")
      .find((cookie) => cookie.trim().startsWith("colors="));
    if (cookieColors) {
      const colorsString = cookieColors.split("=")[1];
      setColors(JSON.parse(colorsString));
    }
  }, []);

  const handleSave = (event) => {
    event.preventDefault();

    setColorNameErr("");
    setColorCodeErr("");

    let isValid = true;

    if (!/^[A-Za-zА-Яа-я]+$/.test(name)) {
      setColorNameErr("Название должно состоять из букв");
      isValid = false;
    }
    if (
      colors.some((color) => color.name.toLowerCase() === name.toLowerCase())
    ) {
      setColorNameErr("Цвет уже существует");
      isValid = false;
    }
    if (
      type === "RGB" &&
      !/^(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*){2}\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*$/.test(
        code
      )
    ) {
      setColorCodeErr("Некорректный формат RGB кода");
      isValid = false;
    } else if (
      type === "RGBA" &&
      !/^(\s*(?:25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\s*,\s*){3}\s*(?:1(?:\.0+)?|0(?:\.[0-9]+)?)\s*$/.test(
        code
      )
    ) {
      setColorCodeErr("Некорректный формат RGBA кода");
      isValid = false;
    } else if (type === "HEX" && !/^#[0-9A-Fa-f]{6}$/.test(code)) {
      setColorCodeErr("Некорректный формат HEX кода");
      isValid = false;
    }
    if (!isValid) return;

    const newColor = {
      name,
      type,
      code,
    };

    const updatedColors = [...colors, newColor];

    const expires = new Date();
    expires.setTime(expires.getTime() + 2 * 60 * 60 * 1000);

    document.cookie = `colors=${JSON.stringify(
      updatedColors
    )}; expires=${expires}`;

    setColors(updatedColors);

    setName("");
    setCode("");
  };

  return (
    <div className="App">
      <h2>Color Palette</h2>

      <form onSubmit={handleSave}>
        <div className="wrap">
          <label>
            {colorNameErr && <span className="error">{colorNameErr}</span>}
          </label>
          <input
            type="text"
            name="color"
            value={name}
            onChange={(e) => setName(e.target.value.trim())}
            placeholder="Enter color name"
          />
        </div>

        <select
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="HEX">HEX</option>
          <option value="RGB">RGB</option>
          <option value="RGBA">RGBA</option>
        </select>

        <div className="wrap">
          <label>
            {colorCodeErr && <span className="error">{colorCodeErr}</span>}
          </label>
          <input
            type="text"
            name="code"
            value={code}
            onChange={(e) => setCode(e.target.value.trim())}
            placeholder="Enter color code"
          />
        </div>

        <button type="submit">Save</button>
      </form>

      <div className="colorsCollect">
        {colors.map((color, i) => (
          <ColorBox key={i} color={color} />
        ))}
      </div>
    </div>
  );
}

export default App;

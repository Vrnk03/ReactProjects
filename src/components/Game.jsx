import React from "react";
import "../styles/game.css";

function Game(props) {
  return (
    <>
      <div className="progress">
        <div
          style={{
            width: `${Math.round((props.step * 100) / props.questionsLen)}%`,
          }}
          className="progress__inner"
        ></div>
      </div>
      <h2>{props.question.title}</h2>
      <ul>
        {props.question.variants.map((variant, i) => (
          <li onClick={() => props.onClickVariant(i)}>{variant}</li>
        ))}
      </ul>
    </>
  );
}

export default Game;

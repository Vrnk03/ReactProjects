import React from "react";
import "../styles/resalt.css";

function Result(props) {
  return (
    <div className="result">
      <h2>
        Вы отгадали {props.correct} ответа из {props.questionsLen}
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

export default Result;

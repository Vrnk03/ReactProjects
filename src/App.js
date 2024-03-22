import React from "react";
import "./App.css";
import Game from "./components/Game";
import Result from "./components/Result";

function App() {
  const questions = [
    {
      title: "У какого животного самые большие глаза относительно тела?",
      variants: ["долгопят", "лемур", "летучая мышь"],
      correct: 0,
    },
    {
      title: "Как называли строителя в старину?",
      variants: ["Бортник", "Зодчий", "Кормчий"],
      correct: 1,
    },
    {
      title: "Какой из перечисленных цветов не голубой?",
      variants: ["Василек", "Незабудка", "Лютик"],
      correct: 2,
    },
  ];

  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (i) => {
    if (i === question.correct) setCorrect(correct + 1);
    setStep(step + 1);
  };

  return (
    <div className="App">
      <h2>Quiz App</h2>
      {step !== questions.length ? (
        <Game
          question={question}
          step={step}
          onClickVariant={onClickVariant}
          questionsLen={questions.length}
        />
      ) : (
        <Result correct={correct} questionsLen={questions.length} />
      )}
    </div>
  );
}

export default App;

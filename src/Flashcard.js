import React, { useState } from "react";
import "./App.css";

const Flashcard = ({ data, onAnswer }) => {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleClick = (option) => {
    if (!answered) {
      setSelected(option);
      setAnswered(true);
      onAnswer(option);
    }
  };

  return (
    <div className="card">
      <h2>{data.question}</h2>
      <div className="options">
        {data.options.map((opt) => (
          <button
            key={opt}
            className={`option ${
              answered ? (opt === data.answer ? "correct" : opt === selected ? "wrong" : "") : ""
            }`}
            onClick={() => handleClick(opt)}
            disabled={answered}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Flashcard;

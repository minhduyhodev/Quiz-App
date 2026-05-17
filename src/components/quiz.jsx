import { useState } from "react";

function Quiz() {
  const questionBank = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "London", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which language is used for web apps?",
      options: ["PHP", "Python", "JavaScript", "All"],
      answer: "All",
    },
    {
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "JavaScript XHTML",
        "JavaScript XQuery",
        "JavaScript XML-DOM",
      ],
      answer: "JavaScript XML",
    },
  ];

  const initiaAnswers = [null, null, null];

  const [] = useState();

  const [userAnswers, setUserAnswers] = useState(initiaAnswers);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const selectedAnswer = userAnswers[currentQuestion];

  function handleSelectedOption(option) {
    const newUserAnswer = [...userAnswers];
    newUserAnswer[currentQuestion] = option;

    setUserAnswers(newUserAnswer);
  }

  function goToNext() {
    setCurrentQuestion(currentQuestion + 1);
  }

  function goToPrev() {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  }

  return (
    <div>
      <h2> Question 1</h2>
      <p className="question"> {questionBank[currentQuestion].question}</p>

      {questionBank[currentQuestion].options.map((option) => (
        <button
          key={option}
          className={`option ${selectedAnswer === option ? "selected" : ""}`}
          onClick={() => handleSelectedOption(option)}
          type="button"
        >
          {" "}
          {option}{" "}
        </button>
      ))}

      <div className="nav-buttons">
        <button
          onClick={goToPrev}
          disabled={currentQuestion == 0}
          type="button"
        >
          {" "}
          Previous{" "}
        </button>
        <button onClick={goToNext} disabled={!selectedAnswer} type="button">
          {" "}
          Next{" "}
        </button>
      </div>
    </div>
  );
}

export default Quiz;

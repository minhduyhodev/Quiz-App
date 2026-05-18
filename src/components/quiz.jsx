import { useState } from "react";
import Results from "./result";

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

  const initialAnswers = Array(questionBank.length).fill(null);
  const [userAnswers, setUserAnswers] = useState(initialAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const selectedAnswer = userAnswers[currentQuestion];

  function handleSelectedOption(option) {
    const nextAnswers = [...userAnswers];
    nextAnswers[currentQuestion] = option;
    setUserAnswers(nextAnswers);
  }

  function goToNext() {
    if (currentQuestion === questionBank.length - 1) {
      setIsQuizFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function goToPrev() {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  }

  function handleRestart() {
    setUserAnswers(initialAnswers);
    setCurrentQuestion(0);
    setIsQuizFinished(false);
  }

  if (isQuizFinished) {
    const score = userAnswers.reduce((total, answer, index) => {
      return total + (answer === questionBank[index].answer ? 1 : 0);
    }, 0);

    return (
      <Results
        score={score}
        totalQuestions={questionBank.length}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div>
      <h2> Question {currentQuestion + 1}</h2>
      <p className="question"> {questionBank[currentQuestion].question}</p>

      {questionBank[currentQuestion].options.map((option) => (
        <button
          key={option}
          className={`option ${selectedAnswer === option ? "selected" : ""}`}
          onClick={() => handleSelectedOption(option)}
          type="button"
        >
          {option}
        </button>
      ))}

      <div className="nav-buttons">
        <button
          onClick={goToPrev}
          disabled={currentQuestion == 0}
          type="button"
        >
          Previous
        </button>
        <button onClick={goToNext} disabled={!selectedAnswer} type="button">
          {currentQuestion === questionBank.length - 1 ? "Finish Exam" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;

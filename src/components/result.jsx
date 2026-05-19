function Results({ score, totalQuestions, onRestart }) {
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>
        Your Score: {score}/{totalQuestions}
      </p>
      <button className="restart-button" onClick={onRestart} type="button">
        Restart Quizz
      </button>
    </div>
  );
}
export default Results;

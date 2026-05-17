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

  const [optionSelected, setOptionSelected] = useState("None");

  function handleSelectedOption(option) {
    setOptionSelected = option;
  }
  return (
    <div>
      <h2> Question 1</h2>
      <p className="question"> {questionBank[0].question}</p>

      {questionBank[0].options.map((option) => (
        <button className="option" onClick>
          {option}
        </button>
      ))}

      <div className="nav-buttons">
        <button> Previos </button>
        <button> Next </button>
      </div>
    </div>
  );
}

export default Quiz;

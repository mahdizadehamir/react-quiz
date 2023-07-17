function Question({ question, questionIndex, setQuestionIndex, answers }) {
  const submitAns = (event) => {
    event.preventDefault();
    setQuestionIndex((prevState) => prevState + 1);
  };
  console.log(answers);
  return (
    <>
      <form>
        <span>{questionIndex + 1}</span>
        <h2>{question}</h2>
        {answers.map((answer) => (
          <label key={answer}>
            <input type="radio" name="answer" value={answer} />
            {answer}
          </label>
        ))}
        <button type="submit" onClick={submitAns}>
          submit
        </button>
      </form>
    </>
  );
}

export default Question;

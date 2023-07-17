import { useState } from "react";
import { useContext } from "react";
//Components
import Question from "./Shared/Question";
//Context
import { QuizContext } from "../Contexts/QuizDataProvider";
//helpers
import { randomMaker } from "../helper/functions";
function Landing() {
  const { data, loading, questionIndex, setQuestionIndex } =
    useContext(QuizContext);
  const [startQuiz, setStartQuiz] = useState(false);
  return (
    <div>
      {startQuiz ? (
        loading ? (
          <h2>loading ...</h2>
        ) : (
          <Question
            question={data[questionIndex].question}
            loading={loading}
            questionIndex={questionIndex}
            setQuestionIndex={setQuestionIndex}
            answers={randomMaker([
              data[questionIndex].correct_answer,
              ...data[questionIndex].incorrect_answers,
            ])}
          />
        )
      ) : (
        <div>
          <h1>Welcome To My Mathematics Quiz App</h1>
          <button onClick={() => setStartQuiz(true)}>Start Quiz</button>
        </div>
      )}
    </div>
  );
}

export default Landing;

import { useState } from "react";
import { useContext } from "react";
//Components
import Question from "./Shared/Question";
//Context
import { QuizContext } from "../Contexts/QuizDataProvider";
function Landing() {
  const { data, loading } = useContext(QuizContext);
  const [startQuiz, setStartQuiz] = useState(false);
  return (
    <div>
      {startQuiz ? (
        <Question data={data} loading={loading} />
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

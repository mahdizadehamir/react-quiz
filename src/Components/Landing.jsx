//Components
import Question from "./Shared/Question";
import { useState } from "react";

function Landing() {
  const [startQuiz, setStartQuiz] = useState(false);
  return (
    <div>
      {startQuiz ? (
        <Question />
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

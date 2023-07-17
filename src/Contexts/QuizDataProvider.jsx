import { createContext } from "react";
import { useEffect, useState } from "react";
import { fetchApi } from "../Services/Api";
import { Navigate } from "react-router-dom";
export const QuizContext = createContext();
function QuizDataProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const apiData = await fetchApi();
      setData(apiData.results);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <QuizContext.Provider
      value={{ data, loading, questionIndex, setQuestionIndex }}
    >
      {questionIndex < 9 ? children : <Navigate to="/result" />}
    </QuizContext.Provider>
  );
}

export default QuizDataProvider;

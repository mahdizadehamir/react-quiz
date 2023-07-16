import { createContext } from "react";
import { useEffect, useState } from "react";
import { fetchApi } from "../Services/Api";

export const QuizContext = createContext();
function QuizDataProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const apiData = await fetchApi();
      setData(apiData.results);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <QuizContext.Provider value={{ data, loading }}>
      {children}
    </QuizContext.Provider>
  );
}

export default QuizDataProvider;

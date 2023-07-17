import { Route, Routes, Navigate } from "react-router-dom";
//components
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import QuizDataProvider from "./Contexts/QuizDataProvider";
import Result from "./Components/Result";
function App() {
  return (
    <>
        <Navbar />
      <QuizDataProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/result" element={<Result />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      </QuizDataProvider>
    </>
  );
}

export default App;

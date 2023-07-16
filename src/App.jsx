//components
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import QuizDataProvider from "./Contexts/QuizDataProvider";
function App() {
  return (
    <>
      <QuizDataProvider>
        <Navbar />
        <Landing />
      </QuizDataProvider>
    </>
  );
}

export default App;

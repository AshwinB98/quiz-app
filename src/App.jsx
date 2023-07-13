import { Route, Routes } from "react-router-dom";
import Home from "./layouts/home/home.layout";
import Quiz from "./layouts/quiz/quiz.layout";
import Result from "./layouts/result/result.layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;

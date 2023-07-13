import { Route, Routes } from "react-router-dom";
import Home from "./layouts/home.layout";
import Quiz from "./layouts/quiz.layout";
import Result from "./layouts/result.layout";

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

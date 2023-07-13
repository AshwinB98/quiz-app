import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../atoms/common/button";
import Choice from "../../../atoms/quiz/choice";
import ProgressBar from "../../../atoms/quiz/progressBar";
import { BtnContainer } from "../../../layouts/result/result.style";
import { QUIZ } from "../../../mock-data";
import {
  ChoicesContainer,
  ImageContainer,
  ProgressBarContainer,
  QuestionContainer,
  QuestionsContainer,
  QuizContainer,
} from "./questions.style";

const Questions = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isChoiceSelected, setIsChoiceSelected] = useState("");
  const isLastQuestion = useMemo(() => {
    return currentQuestion === QUIZ.length - 1;
  }, [currentQuestion]);
  const handleNextQuestion = () => {
    if (isLastQuestion) {
      return navigate("/result");
    }
    setCurrentQuestion((prev) => prev + 1);
    setIsChoiceSelected("");
  };
  const handleChoiceSelect = (choice) => {
    setIsChoiceSelected(choice);
  };
  return (
    <QuestionsContainer>
      <ProgressBarContainer>
        <ProgressBar
          minValue={0}
          maxValue={QUIZ.length}
          value={currentQuestion + 1}
        />
      </ProgressBarContainer>
      <QuizContainer>
        <QuestionContainer>
          <h3>{QUIZ[currentQuestion].question}</h3>
        </QuestionContainer>
        <ImageContainer></ImageContainer>
        <ChoicesContainer>
          {QUIZ[currentQuestion].choice.map((value, idx) => (
            <Choice
              key={idx}
              choice={value}
              isSelected={value === isChoiceSelected}
              onClick={() => handleChoiceSelect(value)}
            />
          ))}
        </ChoicesContainer>
        <BtnContainer>
          <Button
            type={"button"}
            disabled={!isChoiceSelected}
            onClick={handleNextQuestion}
            hasIcon={!isLastQuestion}
          >
            {isLastQuestion ? "Finish" : "Next"}
          </Button>
        </BtnContainer>
      </QuizContainer>
    </QuestionsContainer>
  );
};

export default Questions;

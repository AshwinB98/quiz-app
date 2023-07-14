import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as InfoIcon } from "../../../assets/common/info-icon.svg";
import Button from "../../../atoms/common/button";
import Choice from "../../../atoms/quiz/choice";
import ProgressBar from "../../../atoms/quiz/progressBar";
import { BtnContainer } from "../../../layouts/result/result.style";
import { QUIZ } from "../../../mock-data";
import {
  ChoicesContainer,
  ImageContainer,
  Info,
  ProgressBarContainer,
  QuestionContainer,
  QuestionsContainer,
  QuizContainer,
} from "./questions.style";

const Questions = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isChoiceSelected, setIsChoiceSelected] = useState([]);
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
  const handleChoiceSelect = (choice, isMultiChoice) => {
    if (isMultiChoice) {
      if (isChoiceSelected.includes(choice)) {
        const filteredChoice = (isChoiceSelected || []).filter(
          (val) => val !== choice
        );
        setIsChoiceSelected(filteredChoice);
      } else {
        setIsChoiceSelected([...isChoiceSelected, choice]);
      }
    } else {
      setIsChoiceSelected([choice]);
    }
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

        {QUIZ[currentQuestion].imgUrl && (
          <ImageContainer>
            <img
              src={require(`../../../assets/quiz/${QUIZ[currentQuestion].imgUrl}`)}
              alt="redux-flow"
            />
          </ImageContainer>
        )}
        <ChoicesContainer>
          {QUIZ[currentQuestion].choice.map((value, idx) => (
            <Choice
              key={idx}
              choice={value}
              isSelected={isChoiceSelected.includes(value)}
              onClick={() =>
                handleChoiceSelect(value, QUIZ[currentQuestion].multiAnswer)
              }
            />
          ))}
          {QUIZ[currentQuestion].multiAnswer && (
            <Info>
              <InfoIcon height={"1rem"} width={"1rem"} fill="#ffa500" />
              Multiple answers can be selected for this question
            </Info>
          )}
        </ChoicesContainer>

        <BtnContainer>
          <Button
            type={"button"}
            disabled={isChoiceSelected.length === 0}
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

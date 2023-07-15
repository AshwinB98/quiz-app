import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchQuiz } from "../../../api/quiz/quizApi";
import { ReactComponent as InfoIcon } from "../../../assets/common/info-icon.svg";
import Button from "../../../atoms/common/button";
import Spinner from "../../../atoms/common/spinner";
import Choice from "../../../atoms/quiz/choice";
import ProgressBar from "../../../atoms/quiz/progressBar";
import { BtnContainer } from "../../../layouts/result/result.style";
import {
  selectAllQuestions,
  selectQuestionsIsLoading,
} from "../../../store/quiz/quiz.selector";
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
  const dispatch = useDispatch();
  const isQuestionsLoading = useSelector(selectQuestionsIsLoading);
  const questions = useSelector(selectAllQuestions);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isChoiceSelected, setIsChoiceSelected] = useState([]);

  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);

  const isLastQuestion = useMemo(() => {
    return currentQuestion === questions.length - 1;
  }, [currentQuestion, questions]);

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
        setIsChoiceSelected((prev) => [...prev, choice]);
      }
    } else {
      setIsChoiceSelected([choice]);
    }
  };
  return (
    <QuestionsContainer>
      {isQuestionsLoading ? (
        <Spinner />
      ) : (
        <>
          <ProgressBarContainer>
            <ProgressBar
              minValue={0}
              maxValue={questions.length}
              value={currentQuestion + 1}
            />
          </ProgressBarContainer>
          <QuizContainer>
            <QuestionContainer>
              <h3>{questions[currentQuestion]?.question}</h3>
            </QuestionContainer>
            {questions[currentQuestion]?.imgUrl && (
              <ImageContainer>
                <img
                  src={require(`../../../assets/quiz/${questions[currentQuestion].imgUrl}`)}
                  alt="redux-flow"
                />
              </ImageContainer>
            )}
            <ChoicesContainer>
              {(questions[currentQuestion] || [])?.choice?.map((value, idx) => (
                <Choice
                  key={idx}
                  choice={value}
                  isSelected={isChoiceSelected.includes(value)}
                  onClick={() =>
                    handleChoiceSelect(
                      value,
                      questions[currentQuestion]?.multiAnswer
                    )
                  }
                />
              ))}
              {questions[currentQuestion]?.multiAnswer && (
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
        </>
      )}
    </QuestionsContainer>
  );
};

export default Questions;

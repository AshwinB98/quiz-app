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
  const [choiceSelected, setChoiceSelected] = useState([]);
  const [timer, setTimer] = useState(0);
  const [results, setResults] = useState([]);

  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1000);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [currentQuestion]);

  const isLastQuestion = useMemo(() => {
    return currentQuestion === questions.length - 1;
  }, [currentQuestion, questions]);

  const handleNextQuestion = () => {
    const isMultiChoice = questions[currentQuestion]?.multiAnswer;
    let result = {
      id: questions[currentQuestion]?.id,
      correctAnswer: questions[currentQuestion]?.correctAnswer,
      timer: timer,
    };
    if (isMultiChoice) {
      if (
        choiceSelected.length !==
        questions[currentQuestion].correctAnswer.length
      ) {
        result = {
          ...result,
          isAnswerCorrect: false,
        };
      } else {
        const sortedChoice = [...choiceSelected].sort();
        const sortedCorrectAnswer = [
          ...questions[currentQuestion].correctAnswer,
        ].sort();
        const isAnswerCorrect = (sortedChoice || []).every(
          (choice, idx) => choice === sortedCorrectAnswer[idx]
        );
        result = {
          ...result,
          isAnswerCorrect,
        };
      }
    } else {
      const isAnswerCorrect =
        choiceSelected[0] === questions[currentQuestion].correctAnswer;
      result = {
        ...result,
        isAnswerCorrect,
      };
    }
    setResults((prev) => [...prev, result]);
    setTimer(0);
    if (isLastQuestion) {
      return navigate("/result");
    }
    setCurrentQuestion((prev) => prev + 1);
    setChoiceSelected("");
  };

  const handleChoiceSelect = (choice, isMultiChoice) => {
    if (isMultiChoice) {
      if (choiceSelected.includes(choice)) {
        const filteredChoice = (choiceSelected || []).filter(
          (val) => val !== choice
        );
        setChoiceSelected(filteredChoice);
      } else {
        setChoiceSelected((prev) => [...prev, choice]);
      }
    } else {
      setChoiceSelected([choice]);
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
                  key={idx + 100}
                  choice={value}
                  isSelected={choiceSelected.includes(value)}
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
                disabled={choiceSelected.length === 0}
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

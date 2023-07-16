import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/common/button";
import ResultCard from "../../atoms/result/resultCard";
import ScoreMeter from "../../atoms/result/scoreMeter";
import { selectAllResults } from "../../store/result/result.selector";
import { OuterContainer } from "../quiz/quiz.style";
import {
  BtnContainer,
  ResultCardContainer,
  ResultContainer,
  ScoreMeterContainer,
  TitleContainer,
} from "./result.style";

const Result = () => {
  const navigate = useNavigate();
  const handleStartAgain = () => {
    navigate("/");
  };
  const results = useSelector(selectAllResults);
  const correctAnswerScore = useMemo(() => {
    let score = 0;
    (results || []).forEach((data) => {
      if (data?.isAnswerCorrect) {
        score += 1;
      }
    });
    return score;
  }, [results]);
  return (
    <OuterContainer>
      <ResultContainer>
        <TitleContainer>
          <h1>Your result</h1>
        </TitleContainer>
        <ScoreMeterContainer>
          <ScoreMeter score={correctAnswerScore} totalScore={results.length} />
        </ScoreMeterContainer>
        <ResultCardContainer>
          <ResultCard count={correctAnswerScore} isCorrect={true} />
          <ResultCard count={results.length - correctAnswerScore} />
        </ResultCardContainer>
        <BtnContainer>
          <Button type={"button"} hasIcon={false} onClick={handleStartAgain}>
            Start again
          </Button>
        </BtnContainer>
      </ResultContainer>
    </OuterContainer>
  );
};

export default Result;

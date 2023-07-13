import { useNavigate } from "react-router-dom";
import Button from "../../atoms/common/button";
import ResultCard from "../../atoms/result/resultCard";
import { OuterContainer } from "../quiz/quiz.style";
import {
  BtnContainer,
  ResultCardContainer,
  ResultContainer,
  TitleContainer,
} from "./result.style";

const Result = () => {
  const navigate = useNavigate();
  const handleStartAgain = () => {
    navigate("/");
  };
  return (
    <OuterContainer>
      <ResultContainer>
        <TitleContainer>
          <h1>Your result</h1>
        </TitleContainer>
        <ResultCardContainer>
          <ResultCard count={3} isCorrect={true} />
          <ResultCard count={2} />
        </ResultCardContainer>
        <BtnContainer>
          <Button type={"button"} onClick={handleStartAgain}>
            Start again
          </Button>
        </BtnContainer>
      </ResultContainer>
    </OuterContainer>
  );
};

export default Result;

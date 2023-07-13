import { styled } from "styled-components";
import { ReactComponent as Checkmark } from "../../assets/common/check-outline.svg";
import { ReactComponent as ClearIcon } from "../../assets/common/clear-outline.svg";
import { Flexbox } from "../common/box";

const ResultCard = ({ isCorrect, count }) => {
  return (
    <CardContainer $isCorrect={isCorrect}>
      {isCorrect ? (
        <Checkmark
          height={"1.25rem"}
          width={"1.25rem"}
          stroke="#44B77B"
          fill="#44B77B"
        />
      ) : (
        <ClearIcon
          height={"1.25rem"}
          width={"1.25rem"}
          stroke="#FF3B3F"
          fill="#FF3B3F"
        />
      )}
      <h3>{count}</h3>
      <Answer>{isCorrect ? "Correct" : "Incorrect"}</Answer>
    </CardContainer>
  );
};

const CardContainer = styled(Flexbox)`
  padding: 2rem 1rem;
  column-gap: 1rem;
  align-items: center;
  border-radius: 0.75rem;
  background-color: ${({ $isCorrect }) =>
    $isCorrect ? "rgba(68, 183, 123, 0.2)" : "rgba(255, 59, 63,0.2)"};
`;

const Answer = styled.h3`
  color: rgba(0, 0, 0, 0.5);
`;

export default ResultCard;

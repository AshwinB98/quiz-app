import { styled } from "styled-components";
import { ReactComponent as Checkmark } from "../../assets/common/check-outline.svg";
import { Flexbox } from "../common/box";

const Choice = ({ choice, isSelected, onClick }) => {
  return (
    <ChoiceContainer $isSelected={isSelected} onClick={onClick}>
      <Checkmark height={"1.25rem"} width={"1.25rem"} />
      <p>{choice}</p>
    </ChoiceContainer>
  );
};

const ChoiceContainer = styled(Flexbox)`
  padding: 2rem 1rem;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "white" : "rgb(243, 244, 250)"};
  border-radius: 0.675rem;
  column-gap: 1rem;
  border: ${({ $isSelected }) => $isSelected && ".125rem solid #44B77B"};
  svg {
    stroke: ${({ $isSelected }) => ($isSelected ? "#44B77B" : "#BCBDBE")};
    fill: ${({ $isSelected }) => ($isSelected ? "#44B77B" : "#BCBDBE")};
  }
`;

export default Choice;

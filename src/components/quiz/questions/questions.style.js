import { styled } from "styled-components";
import { Box, Flexbox } from "../../../atoms/common/box";

export const QuestionsContainer = styled(Box)`
  height: 100%;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  padding: 1.875rem;
`;

export const QuizContainer = styled(Flexbox)`
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const ProgressBarContainer = styled(Box)`
  background-color: white;
  border-radius: 50%;
  padding: 0.4rem;
  position: absolute;
  left: 50%;
  right: 50%;
  top: 9rem;
  bottom: 1.8rem;
  transform: translate(-50%, -50%);
  height: 7rem;
  width: 7rem;
`;

export const QuestionContainer = styled(Box)`
  margin-top: 3.2rem;
  margin-bottom: 1rem;
  h3 {
    font-weight: 900;
  }
`;

export const ChoicesContainer = styled(Flexbox)`
  height: 100%;
  overflow: scroll;
  flex-direction: column;
  margin-bottom: 1rem;
  row-gap: 1rem;
`;

export const ImageContainer = styled(Box)``;

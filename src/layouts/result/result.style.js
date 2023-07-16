import { styled } from "styled-components";
import { Box, Flexbox } from "../../atoms/common/Box";
import { StyledButton } from "../../atoms/common/button";
import { QuestionsContainer } from "../../components/quiz/questions/questions.style";

export const ResultContainer = styled(QuestionsContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width: 48rem) {
    box-shadow: 0 12px 12px 0 #abacae;
  }
`;

export const TitleContainer = styled(Box)`
  text-align: center;
`;

export const ResultCardContainer = styled(Flexbox)`
  flex-direction: column;
  row-gap: 1rem;
`;

export const BtnContainer = styled(Flexbox)`
  ${StyledButton} {
    width: 100%;
  }
  @media only screen and (min-width: 48rem) {
    justify-content: center;
    ${StyledButton} {
      width: 50%;
    }
  }
`;

export const ScoreMeterContainer = styled(Flexbox)`
  align-items: center;
  justify-content: center;
`;

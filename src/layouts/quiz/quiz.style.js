import { styled } from "styled-components";
import { Box } from "../../atoms/common/box";

export const OuterContainer = styled(Box)`
  height: 100dvh;
  width: 100dvw;
  background-size: cover;
  padding-top: 9rem;
  background: url(${require(`../../assets/quiz/quiz-bg-mobile.svg`).default})
    no-repeat bottom;
  @media only screen and (min-width: 48rem) {
    background: url(${require(`../../assets/quiz/quiz-bg.svg`).default})
      no-repeat bottom;
    padding: 9rem 12rem 0rem 12rem;
  }
`;

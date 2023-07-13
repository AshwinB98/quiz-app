import { styled } from "styled-components";
import { Box } from "../../atoms/common/Box";

export const OuterContainer = styled(Box)`
  height: 100dvh;
  width: 100dvw;
  background-size: cover;
  background: url(${require(`../../assets/quiz-bg-mobile.svg`).default})
    no-repeat bottom;
  @media only screen and (min-width: 48rem) {
    background: url(${require(`../../assets/quiz-bg.svg`).default}) no-repeat
      bottom;
  }
`;

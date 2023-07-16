import { styled } from "styled-components";
import { Box } from "../../atoms/common/box";

export const OuterContainer = styled(Box)`
  height: 100dvh;
  width: 100dvw;
  padding-top: 9rem;
  background: url(${require(`../../assets/quiz/bg-decoration.svg`).default})
      repeat-x,
    linear-gradient(#af9cf3, #ffffff) no-repeat center fixed;
  @media only screen and (min-width: 48rem) {
    padding: 9rem 12rem 0rem 12rem;
  }
`;

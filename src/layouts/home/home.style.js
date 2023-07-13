import { styled } from "styled-components";
import { Box } from "../../atoms/common/Box";

export const HomeContainer = styled(Box)`
  height: 100dvh;
  width: 100dvw;
  background: url(${require(`../../assets/home/home-bg.svg`).default}) no-repeat
    bottom;
  background-size: cover;
`;

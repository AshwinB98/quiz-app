import { styled } from "styled-components";
import { Flexbox } from "../../atoms/common/box";
import { StyledButton } from "../../atoms/common/button";

export const HomeContainer = styled(Flexbox)`
  height: 100dvh;
  width: 100dvw;
  background: url(${require(`../../assets/home/home-bg.svg`).default}) no-repeat
    bottom;
  background-size: cover;
  @media only screen and (min-width: 48rem) {
    justify-content: center;
    align-items: center;
  }
  flex-wrap: wrap;
`;

export const ContentContainer = styled(Flexbox)`
  flex-direction: column;
  justify-content: space-between;

  align-items: center;
  width: 100%;
  padding: 1.25rem;
  ${StyledButton} {
    width: 100%;
  }
  svg {
    width: 10rem;
  }
  @media only screen and (min-width: 48rem) {
    width: 50%;
    height: 43.75rem;
    width: 31.25rem;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 0, 0, 0),
      rgba(255, 255, 255, 0.6)
    );
    box-shadow: 0 -0.125rem 0.5rem 0 #abacae;
    border-radius: 1rem;
    svg {
      width: 16rem;
    }
  }
`;

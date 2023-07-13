import { styled } from "styled-components";
import { Flexbox } from "../../atoms/common/Box";
import { StyledButton } from "../../atoms/common/button";

export const HomeContainer = styled(Flexbox)`
  height: 100dvh;
  width: 100dvw;
  background: url(${require(`../../assets/home/home-bg.svg`).default}) no-repeat
    bottom;
  background-size: cover;
  flex-wrap: wrap;
`;

export const RightContainer = styled(Flexbox)`
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
    background-image: linear-gradient(
      to right,
      rgba(255, 0, 0, 0),
      rgba(255, 255, 255, 0.6)
    );
    border-bottom-left-radius: 1.5rem;
    svg {
      width: 16rem;
    }
  }
`;
export const LeftContainer = styled(Flexbox)`
  display: none;
  @media only screen and (min-width: 48rem) {
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    /* background-color: white; */
    padding-left: 2rem;
    h1 {
      color: rgb(255, 117, 4);
      font-size: 5rem;
    }
    h2 {
      font-size: 2.6rem;
      color: #898b8e;
    }
  }
`;

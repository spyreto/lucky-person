import styled, { keyframes } from "styled-components";
import { mainColorShade, mainFontColor } from "../../utils/styleVariables";

const spin = keyframes` 
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerOverlay = styled.div`
  width: 18rem;
  height: 28rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 40em) {
    width: 20rem;
    height: 30rem;
  }

  @media screen and (min-width: 56em) {
    width: 26rem;
    height: 40rem;
    padding: 2.4rem;
  }
`;

export const SpinnerContainer = styled.div`
  display: block;
  width: 7.5rem;
  height: 7.5rem;
  border: 0.3rem solid ${mainColorShade};
  border-radius: 50%;
  border-top-color: ${mainFontColor};
  animation: ${spin} 1s ease-in-out infinite;

  @media screen and (min-width: 40em) {
    width: 10rem;
    height: 10rem;
    border-width: 0.35rem;
  }

  @media screen and (min-width: 56em) {
    width: 12rem;
    height: 12rem;
    border-width: 0.4rem;
  }
`;

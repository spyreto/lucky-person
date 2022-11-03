import styled from "styled-components";
import {
  mainColor,
  mainColorShade,
  mainFontColor,
} from "../../utils/styleVariables";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 5;
  background: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  position: fixed;
  top: 30vh;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  z-index: 10;
  overflow: hidden;

  background: ${mainColor};
  box-shadow: 0 0.8rem 3rem rgba(0, 0, 0, 0.26);
  border-radius: 1.2rem;
  color: ${mainFontColor};

  @media screen and (min-width: 40em) {
    max-width: 45rem;
  }

  @media screen and (min-width: 900px) {
    max-width: 60rem;
  }
`;

export const Header = styled.div`
  background: ${mainColorShade};
  padding: 1rem;

  h2 {
    font-size: 2rem;
    weight: 700;
  }
`;

export const Content = styled.p`
  padding: 3rem;
  font-size: 1.6rem;
`;

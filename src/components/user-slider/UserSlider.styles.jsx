import styled from "styled-components";
import { mainColorShade } from "../../utils/styleVariables";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Button = styled.button`
  // Remove button default style
  padding: 0;
  border: none;
  background: none;

  visibility: ${({ isHidden }) => (isHidden ? "hidden" : "visible")};
  svg {
    cursor: pointer;
    fill: ${mainColorShade};

    &:active {
      transform: scale(1.2);
    }
  }
  @media screen and (min-width: 40em) {
    margin: 0;
    position: absolute;
    transform: translate(-50%, -50%);
  }
`;

export const LeftButton = styled(Button)`
  margin-right: 1.2rem;
  @media screen and (min-width: 24em) {
    margin-right: 2.4rem;
  }
  @media screen and (min-width: 40em) {
    top: 50%;
    left: -35%;
  }

  @media screen and (min-width: 56em) {
    top: 50%;
    left: -105%;
  }
`;

export const RigthButton = styled(Button)`
  margin-left: 1.2rem;
  @media screen and (min-width: 24em) {
    margin-left: 2.4rem;
  }
  @media screen and (min-width: 40em) {
    top: 50%;
    left: 130%;
  }

  @media screen and (min-width: 56em) {
    top: 50%;
    left: 200%;
  }
`;

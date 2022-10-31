import styled from "styled-components";
import { mainColorShade, card } from "../../utils/styleVariables";

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
  margin: 0 2.4rem;

  visibility: ${({ isHidden }) => (isHidden ? "hidden" : "visible")};
  svg {
    cursor: pointer;
    fill: ${mainColorShade};

    &:active {
      transform: scale(1.2);
    }
  }
`;

export const LeftButton = styled(Button)`
  margin-right: 2.4rem;
  //2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

  @media screen and (min-width: 650px) {
    margin: 0;
    position: absolute;
    top: 50%;
    left: -50%;
    transform: translate(-50%, -50%);
    z-index: 5;
  }

  @media screen and (min-width: 900px) {
    top: 50%;
    left: -120%;
  }
`;

export const RigthButton = styled(Button)`
  margin-left: 2.4rem;
  //2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
  @media screen and (min-width: 650px) {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 150%;
    transform: translate(-50%, -50%);
    z-index: 5;
  }

  @media screen and (min-width: 900px) {
    top: 50%;
    left: 220%;
  }
`;

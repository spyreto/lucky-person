import styled from "styled-components";
import { mainColorShade } from "../../utils/styleVariables";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

export const RigthButton = styled(Button)`
  margin-left: 2.4rem;
`;

import styled from "styled-components";
import { mainColorShade } from "../../utils/styleVariables";

export const Container = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

export const Button = styled.button`
  // Remove button default style
  padding: 0;
  border: none;
  background: none;

  visibility: ${({ isHidden }) => (isHidden ? "hidden" : "visible")};
  svg {
    cursor: pointer;
    fill: ${mainColorShade};
  }

  &:active {
    svg {
      transform: scale(0.7);
    }
  }

  // On bigger screens
  // &:hover {
  //   svg {
  //     transform: scale(0.7);
  //   }
  // }
`;

import styled from "styled-components";

import { mainColorShade, mainFontColor } from "../../utils/styleVariables";

export const Container = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  @media screen and (min-width: 40em) {
    font-size: 2rem;
  }
`;

export const ColorInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 5.6rem;
  width: 24rem;
  padding: 0.8rem 1.2rem 0.8rem 1.6rem;
  border: 0.1rem solid ${mainColorShade};
  border-radius: 1.2rem;
  box-shadow: 0 0.1rem 0.5rem ${mainColorShade};

  // Drop icon
  svg:first-of-type {
    stroke: ${mainColorShade};
  }

  // Color picker icon
  svg:last-of-type {
    cursor: pointer;
    fill: ${mainFontColor};
    margin-left: auto;
  }

  @media screen and (min-width: 24em) {
    width: 28rem;
  }

  @media screen and (min-width: 40em) {
    width: 32rem;
  }
`;

export const ColorTextValue = styled.div`
  padding: 0 1.6rem;
  font-size: 1.6rem;
  color: ${mainFontColor};

  @media screen and (min-width: 40em) {
    font-size: 1.8rem;
  }
`;

export const Input = styled.input`
  position: absolute;
  top: 80%;
  left: 0;
  // transform: translate(-50%, -50%);
  padding: 0rem;
  visibility: hidden;
`;

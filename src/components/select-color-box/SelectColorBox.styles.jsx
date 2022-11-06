import styled from "styled-components";

import { mainColorShade, mainFontColor } from "../../utils/styleVariables";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 5.6rem;
  width: 24rem;
  margin-top: 4.2rem;
  padding: 0.8rem 1.2rem 0.8rem 1.6rem;
  border: 0.1rem solid ${mainColorShade};
  border-radius: 1.2rem;
  box-shadow: 0 0.1rem 0.5rem ${mainColorShade};

  // hidden color input
  input {
    position: absolute;
    top: 80%;
    left: 0;
    padding: 0rem;
    visibility: hidden;
  }

  label {
    position: absolute;
    top: -3.6rem;
    left: 0;
    font-size: 1.6rem;
  }

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
    label {
      font-size: 2rem;
    }
  }
`;

export const ColorTextValue = styled.span`
  padding: 0 1.6rem;
  font-size: 1.6rem;
  color: ${mainFontColor};

  @media screen and (min-width: 40em) {
    font-size: 1.8rem;
  }
`;

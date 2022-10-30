import styled from "styled-components";
import { mainColorShade, mainFontColor } from "../../utils/styleVariables";

export const SpinnerOverlay = styled.div`
  width: 24rem;
  height: 38rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 7.5rem;
  height: 7.5rem;
  border: 0.3rem solid ${mainColorShade};
  border-radius: 50%;
  border-top-color: ${mainFontColor};
  animation: spin 1s ease-in-outinfinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

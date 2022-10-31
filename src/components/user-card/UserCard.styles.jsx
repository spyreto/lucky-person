import styled, { keyframes } from "styled-components";
import { mainColorShade } from "../../utils/styleVariables";

const animationDuration = "0.8s";
const animationTimingFun = "ease-out";

const activeCardRotateIn = keyframes` {
  0% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotate(0);
  }
}`;

const activeCardRotateOut = keyframes` {
  0% {
    transform: rotateY(-180deg);
  }
  100% {
    transform: rotate(0);
  }
}`;

const flipCardRotateIn = keyframes` {
  0% {
    transform: rotateY(90deg);
  }
  100% {
    transform: rotate(0);
  }
}`;

const flipCardRotateOut = keyframes` {
  0% {
    transform: rotateY(-180deg);
  }
  100% {
    transform: rotate(0);
  }
}`;

const prevCardSlideBack650 = keyframes` {
  0% {
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%) scale(0.4);
  }

  100% {
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%) scale(0.8);
  }
}`;

const activeCardSlideBack650 = keyframes` {
  0% {
    transform: translate(-80%, 0%) scale(0.8);
  }
  100% {
    transform: translate(0%, 0%) scale(1);
  }
}`;

const nextCardSlideBack650 = keyframes` {
  0% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    top: 50%;
    left: 80%;
    transform: translate(-50%, -50%) scale(0.8);
  }
}`;

const prevCardSlideIn650 = keyframes` {
  0% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
  }

  100% {
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%) scale(0.8);
  }
}`;

const activeCardSlideIn650 = keyframes` {
  0% {
    transform: translate(80%, 0%) scale(0.8);
  }
  100% {
    transform: translate(0%, 0%) scale(1);
  }
}`;

const nextCardSlideIn650 = keyframes` {
  0% {
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%) scale(0.4);
  }
  100% {
    top: 50%;
    left: 80%;
    transform: translate(-50%, -50%) scale(0.8);
  }
}`;

const prevCardSlideBack900 = keyframes` {
  0% {
    top: 50%;
    left: -50%;
    transform: translate(-50%, -50%) scale(0.4);
  }

  100% {
    top: 50%;
    left: -50%;
    transform: translate(-50%, -50%) scale(0.8);
  }
}`;

const activeCardSlideBack900 = keyframes` {
  0% {
    transform: translate(-100%, 0%) scale(0.8);
  }
  100% {
    transform: translate(0%, 0%) scale(1);
  }
}`;

const nextCardSlideBack900 = keyframes` {
  0% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    top: 50%;
    left: 150%;
    transform: translate(-50%, -50%) scale(0.8);
  }
}`;

const prevCardSlideIn900 = keyframes` {
  0% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
  }

  100% {
    top: 50%;
    left: -50%;
    transform: translate(-50%, -50%) scale(0.8);
  }
}`;

const activeCardSlideIn900 = keyframes` {
  0% {
    transform: translate(100%, 0%) scale(0.8);
  }
  100% {
    transform: translate(0%, 0%) scale(1);
  }
}`;

const nextCardSlideIn900 = keyframes` {
  0% {
    top: 50%;
    left: 150%;
    transform: translate(-50%, -50%) scale(0.4);
  }
  100% {
    top: 50%;
    left: 150%;
    transform: translate(-50%, -50%) scale(0.8);
  }
}`;

const BaseCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 24rem;
  height: 38rem;
  padding: 2.4rem;
  background-color: ${(props) => props.color};

  box-shadow: 0 0.8rem 3rem ${mainColorShade};
  border-radius: 1.2rem;
  color: ${({ fontColor }) => fontColor};
  svg {
    fill: ${({ fontColor }) => fontColor};
`;

export const Header = styled.div`
  margin-top: 2rem;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }

  h3 {
    margin-top: 2rem;
    font-size: 2rem;
    weight: 700;
  }
`;

export const InfoContainer = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.6rem;
`;

export const InfoItem = styled.div`
  display: grid;
  grid-template-columns: 2.4rem auto;
  grid-template-rows: 1fr auto;
  column-gap: 1.2rem;
  justify-items: start;
  align-items: start;

  svg: {
    grid-area: 1/1/2/2;
  }

  span {
    word-break: break-word;
    grid-area: 1/2/3/3;
    font-size: 1.4rem;
  }
`;

export const FlipCardBack = styled.div`
  position: absolute;
  background-color: #2980b9;
  z-index: -1;
  width: 24rem;
  height: 38rem;

  &.forward {
    @media screen and (max-width: 649px) {
      animation: ${flipCardRotateIn} ${animationDuration} ${animationTimingFun}
        forwards;
    }
  }

  &.backward {
    @media screen and (max-width: 649px) {
      animation: ${flipCardRotateOut} ${animationDuration} ${animationTimingFun}
        forwards;
    }
  }
`;

export const ActiveCard = styled(BaseCard)`
  &.forward {
    @media screen and (max-width: 649px) {
      animation: ${activeCardRotateIn} ${animationDuration}
        ${animationTimingFun} forwards;
    }
    @media screen and (min-width: 650px) {
      animation: ${activeCardSlideIn650} ${animationDuration}
        ${animationTimingFun} forwards;
    }
    @media screen and (min-width: 900px) {
      animation: ${activeCardSlideIn900} ${animationDuration}
        ${animationTimingFun} forwards;
    }
  }

  &.backward {
    @media screen and (max-width: 649px) {
      animation: ${activeCardRotateOut} ${animationDuration}
        ${animationTimingFun} forwards;
    }
    @media screen and (min-width: 650px) {
      animation: ${activeCardSlideBack650} ${animationDuration}
        ${animationTimingFun} forwards;
    }
    @media screen and (min-width: 900px) {
      animation: ${activeCardSlideBack900} ${animationDuration}
        ${animationTimingFun} forwards;
    }
  }
`;

export const PreviousCard = styled(BaseCard)`
  display: none;
  visibility: ${({ isHidden }) => (isHidden ? "hidden" : "visible")};
  position: absolute;
  z-index: -1;

  @media screen and (min-width: 650px) {
    display: flex;
  }

  &.forward {
    @media screen and (min-width: 650px) {
      animation: ${prevCardSlideIn650} ${animationDuration}
        ${animationTimingFun} forwards;
    }

    @media screen and (min-width: 900px) {
      animation: ${prevCardSlideIn900} ${animationDuration}
        ${animationTimingFun} forwards;
    }
  }

  &.backward {
    @media screen and (min-width: 650px) {
      animation: ${prevCardSlideBack650} ${animationDuration}
        ${animationTimingFun} forwards;
    }

    @media screen and (min-width: 900px) {
      animation: ${prevCardSlideBack900} ${animationDuration}
        ${animationTimingFun} forwards;
    }
  }
`;
export const NextCard = styled(BaseCard)`
  display: none;
  position: absolute;
  z-index: -1;
  transform: translate(-50%, -50%) scale(0.8);

  @media screen and (min-width: 650px) {
    display: flex;
    top: 50%;
    left: 80%;
  }

  @media screen and (min-width: 900px) {
    top: 50%;
    left: 150%;
  }

  &.forward {
    @media screen and (min-width: 650px) {
      animation: ${nextCardSlideIn650} ${animationDuration}
        ${animationTimingFun} forwards;
    }
    @media screen and (min-width: 900px) {
      animation: ${nextCardSlideIn900} ${animationDuration}
        ${animationTimingFun} forwards;
    }
  }

  &.backward {
    @media screen and (min-width: 650px) {
      animation: ${nextCardSlideBack650} ${animationDuration}
        ${animationTimingFun} forwards;
    }
    @media screen and (min-width: 900px) {
      animation: ${nextCardSlideBack900} ${animationDuration}
        ${animationTimingFun} forwards;
    }
  }
`;

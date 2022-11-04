import styled, { keyframes } from "styled-components";
import { mainColorShade } from "../../utils/styleVariables";

const animationDuration = "0.6s";
const animationTimingFun = "ease-out";

// Flip card animation max-width 649px
// Next button
// Active card  animation
const activeCardRotateIn = keyframes` 
    0% {
      transform: rotateY(-180deg);  
    }
    100% {
      transform: rotate(0);
    }    
`;
// Previous card animation (Is the active card before button press) (as card backside)
const prevCardRotateIn = keyframes` 
  0% {
    transform: rotate(0);
    
  }
  100% {    
    backface-visibility: hidden;
    transform: rotateY(180deg);
  }
`;

// Back button
// Active card animation
const activeCardRotateOut = keyframes` 
    0% {
      transform: rotateY(180deg);  
    }
    100% {
      transform: rotate(0);
    }    
`;
// Next card animation (Is the active card before button press) (as card backside)
const nextCardRotateOut = keyframes` 
  0% {
    transform: rotate(0);    
  }
  100% {    
    backface-visibility: hidden;
    transform: rotateY(-180deg);
  }
`;

// Carousel card slider animation min-width 650px
// Back button
// Previous card animation
const prevCardSlideBack650 = keyframes` 
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
`;
// Active card animation
const activeCardSlideBack650 = keyframes` 
  0% {
    transform: translate(-80%, 0%) scale(0.8);
  }
  100% {
    transform: translate(0%, 0%) scale(1);
  }
`;
// Next card animation
const nextCardSlideBack650 = keyframes` 
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
`;

// Next button
// Previous card animation
const prevCardSlideIn650 = keyframes` 
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
`;
// Active card animation
const activeCardSlideIn650 = keyframes` 
  0% {
    transform: translate(80%, 0%) scale(0.8);
  }
  100% {
    transform: translate(0%, 0%) scale(1);
  }
`;
// Next card animation
const nextCardSlideIn650 = keyframes` 
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
`;

// Carousel card slider animation min-width 900px
// Back button
// Previous card animation
const prevCardSlideBack900 = keyframes` 
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
`;
// Active card animation
const activeCardSlideBack900 = keyframes` 
  0% {
    transform: translate(-100%, 0%) scale(0.8);
  }
  100% {
    transform: translate(0%, 0%) scale(1);
  }
`;
// Next card animation
const nextCardSlideBack900 = keyframes` 
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
`;

// Next button
// Previous card animation
const prevCardSlideIn900 = keyframes` 
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
`;
// Active card animation
const activeCardSlideIn900 = keyframes` 
  0% {
    transform: translate(100%, 0%) scale(0.8);
  }
  100% {
    transform: translate(0%, 0%) scale(1);
  }
`;
// Next card animation
const nextCardSlideIn900 = keyframes` 
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
`;

// Basecard style
const BaseCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18rem;
  height: 28rem;
  padding: 1.6rem;

  background: linear-gradient(
    135deg,
    ${({ tint }) => tint} 10%,
    ${({ color }) => color} 30% 60%,
    ${({ shade }) => shade} 90%
  );

  border-radius: 1.2rem;
  color: ${({ fontColor }) => fontColor};
  svg {
    fill: ${({ fontColor }) => fontColor};
  }

  @media screen and (min-width: 20em) {
    width: 20rem;
    height: 30rem;
  }

  @media screen and (min-width: 24em) {
    width: 26rem;
    height: 40rem;
    padding: 2.4rem;
  }
`;

export const Name = styled.div`
  margin-top: 1.2rem;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 50%;
  }

  h3 {
    margin-top: 1.2rem;
    font-size: 1.6rem;
    weight: 700;
  }

  @media screen and (min-width: 24em) {
    margin-top: 1.8rem;
    img {
      width: 10rem;
      height: 10rem;
    }
    h3 {
      margin-top: 2.4rem;
      font-size: 2rem;
      weight: 700;
    }
  }

  @media screen and (min-width: 40em) {
    h3 {
      font-size: 2.4rem;
    }
  }
`;

// Conteiner for the rest of the information
export const InfoContainer = styled.div`
  margin-top: 1.8rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.2rem;

  @media screen and (min-width: 24em) {
    margin-top: 2.4rem;
    gap: 1.6rem;
  }
`;

// Info with svg style e.g. email
export const InfoItem = styled.div`
  display: grid;
  grid-template-columns: 1.8rem auto;
  grid-template-rows: 1fr auto;
  column-gap: 0.8rem;
  justify-items: start;
  align-items: center;

  svg: {
    grid-area: 1/1/2/2;
  }

  span {
    word-break: break-word;
    grid-area: 1/2/3/3;
    font-size: 1rem;
  }

  @media screen and (min-width: 24em) {
    grid-template-columns: 2.4rem auto;
    column-gap: 1.2rem;
    span {
      font-size: 1.4rem;
    }
  }

  @media screen and (min-width: 40em) {
    span {
      font-size: 1.4rem;
    }
  }
`;

// Active card style - (inherits the base style)
export const ActiveCard = styled(BaseCard)`
  box-shadow: 0 0.8rem 3rem ${mainColorShade};
  perspective: 80rem;
  transform-style: preserve-3d;

  &.forward {
    animation: ${activeCardRotateIn} ${animationDuration} ${animationTimingFun}
      forwards;
    @media screen and (min-width: 40em) {
      animation: ${activeCardSlideIn650} ${animationDuration}
        ${animationTimingFun} forwards;
    }
    @media screen and (min-width: 56em) {
      animation: ${activeCardSlideIn900} ${animationDuration}
        ${animationTimingFun} forwards;
    }
  }

  &.backward {
    animation: ${activeCardRotateOut} ${animationDuration} ${animationTimingFun}
      forwards;
    @media screen and (min-width: 40em) {
      animation: ${activeCardSlideBack650} ${animationDuration}
        ${animationTimingFun} forwards;
    }
    @media screen and (min-width: 56em) {
      animation: ${activeCardSlideBack900} ${animationDuration}
        ${animationTimingFun} forwards;
    }
  }
`;

// Previous card style - (inherits the base style)
export const PreviousCard = styled(BaseCard)`
  display: none;
  visibility: ${({ isHidden }) => (isHidden ? "hidden" : "visible")};
  position: absolute;

  @media screen and (min-width: 40em) {
    display: flex;
    box-shadow: 0 0.4rem 1.2rem ${mainColorShade};
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%) scale(0.8);
  }

  @media screen and (min-width: 56em) {
    left: 50%;
  }

  &.forward {
    display: flex;
    z-index: 5;
    animation: ${prevCardRotateIn} ${animationDuration} ${animationTimingFun}
      forwards;

    @media screen and (min-width: 40em) {
      z-index: -1;
      animation: ${prevCardSlideIn650} ${animationDuration}
        ${animationTimingFun} forwards;
    }

    @media screen and (min-width: 56em) {
      animation: ${prevCardSlideIn900} ${animationDuration}
        ${animationTimingFun} forwards;
    }
  }

  &.backward {
    @media screen and (min-width: 40em) {
      z-index: -1;
      animation: ${prevCardSlideBack650} ${animationDuration}
        ${animationTimingFun} forwards;
    }

    @media screen and (min-width: 56em) {
      animation: ${prevCardSlideBack900} ${animationDuration}
        ${animationTimingFun} forwards;
    }
  }
`;

// Next card style - (inherits the base style)
export const NextCard = styled(BaseCard)`
  display: none;
  position: absolute;
  z-index: -1;

  @media screen and (min-width: 40em) {
    display: flex;
    box-shadow: 0 0.4rem 1.2rem ${mainColorShade};
    top: 50%;
    left: 80%;
    transform: translate(-50%, -50%) scale(0.8);
  }

  @media screen and (min-width: 56em) {
    left: 150%;
  }

  &.forward {
    @media screen and (min-width: 40em) {
      z-index: -1;
      animation: ${nextCardSlideIn650} ${animationDuration}
        ${animationTimingFun} forwards;
    }
    @media screen and (min-width: 56em) {
      animation: ${nextCardSlideIn900} ${animationDuration}
        ${animationTimingFun} forwards;
    }
  }

  &.backward {
    display: flex;
    z-index: 5;
    animation: ${nextCardRotateOut} ${animationDuration} ${animationTimingFun}
      forwards;
    @media screen and (min-width: 40em) {
      z-index: -1;
      animation: ${nextCardSlideBack650} ${animationDuration}
        ${animationTimingFun} forwards;
    }
    @media screen and (min-width: 56em) {
      animation: ${nextCardSlideBack900} ${animationDuration}
        ${animationTimingFun} forwards;
    }
  }
`;

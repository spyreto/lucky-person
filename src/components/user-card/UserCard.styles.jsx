import styled from "styled-components";
import { mainColorShade } from "../../utils/styleVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 24rem;
  height: 38rem;
  padding: 2.4rem;
  background-color: ${(props) => props.color};
  // linear-gradient(to left top, blue, red);

  box-shadow: 0 0.8rem 3rem ${mainColorShade};
  border-radius: 1.2rem;
  color: ${({ fontColor }) => fontColor};


  svg {
    fill: ${({ fontColor }) => fontColor};
`;

export const Header = styled.div`
  margin-top: 2.4rem;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 50%;
  }

  h3 {
    margin-top: 2.4rem;
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

// #c92a2a

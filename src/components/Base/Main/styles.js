import styled from "styled-components";

import imgUrl from "../../../assets/img/pixel-night.gif";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url(${imgUrl});
  background-size: cover;
`;

export const ContainerGrade = styled.div`
  /* position: relative; */
  background-color: rgba(73, 6, 141, 0.5);
  height: 100vh;
  width: 320px;
  padding: 0px 6px 0px 0px;
  /* box-shadow: 29px 0px 48px black; */
  box-shadow: inset 0 0 1em purple, 0 0 5em black;
`;

export const DivLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: black;
  height: 358px;
  width: 5px;
  margin: 0px 0px 0px 154px;
`;

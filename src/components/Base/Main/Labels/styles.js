import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 55px;
  background-color: #020202;
  box-shadow: 3px 3px 3px black;
  margin: 10px;
  padding: 10px 15px 10px 20px;
  border-radius: 10px;
  :hover {
    box-shadow: 2px 2px 2px #eae8ff;
    border: 0.5px solid #eae8ff;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 42px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 1px;
  box-shadow: 1px 1px 1px white;
  /* :hover {
    box-shadow: 2px 2px 2px white;
    background-color: #eae8ff;
  } */

  color: black;
`;

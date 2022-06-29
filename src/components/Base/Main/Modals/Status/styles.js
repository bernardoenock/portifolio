import styled from "styled-components";

export const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-family: "Pixel Text";
    font-size: 70px;
    color: #14004a;
    margin-top: -15px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  height: 150%;

  p {
    margin: 3% 1% 1% 3%;
    font-size: 80%;
  }
`;

export const BoxContainer = styled.div`
  position: absolute;

  margin: 11% 0% 10% 6%;
  transform: translate(-50% -50%);
  width: 90%;
  height: 95%;
  background-color: #03000a;
  border: 4px solid #ffffff;
  box-shadow: 24px;
  color: white;
  padding: 1px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
    border: 3px solid #14004a;
  }
  @media only screen and (min-width: 670px) {
    width: 50%;
    margin: 1% 0% 9% 27%;

    p {
      font-size: 90%;
    }
  }
`;

export const ImgContainer = styled.div`
  width: 40%;
  height: 40%;
  /* overflow: hidden;
  position: relative; */

  margin: 0% 3% 0% 0%;

  img {
    width: 100px;
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%); */
  }
`;

export const TxtContainerAll = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TxtContainerImg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 4px;
  margin: 5% 3% 0% 0%;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TxtContainer = styled.div`
  width: 40%;
  margin: 1% -7% 0% 0%;
  padding: 0;
  h3 {
    font-size: 20px;
    margin: 0% -4% 0% -19%;
  }
  p {
    padding: 0;
    margin: 0% -69% 0% -62%;
  }

  @media only screen and (min-width: 500px) {
    width: 40%;
    margin: 1% -3% 3% 0%;
    h3 {
      margin-left: 0%;
    }
    p {
      padding: 0;
      margin: 0;
    }
  }
`;

export const TxtContainerB = styled.div`
  margin: 0% 7% 0% 7%;
`;

export const Conquistas = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0% 0% 0% 9%;
  .icon {
    margin: 5% 6% 0 6%;
    padding: 1%;
    width: 40px;
    height: 40px;
  }
  @media only screen and (min-width: 950px) {
    .icon {
      width: 50px;
      height: 50px;
    }
  }
`;

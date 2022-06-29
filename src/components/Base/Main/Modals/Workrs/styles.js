import styled from "styled-components";

export const ContainerAll = styled.div`
  p {
    font-family: "Pixel Text";
    font-size: 70px;
    color: #14004a;
    margin-top: -15px;
  }
`;

export const BoxContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6% 0% 6% 3%;
  transform: translate(-50% -50%);
  width: 95%;
  height: 650px;
  background-color: #03000a;
  border: 4px solid #ffffff;
  box-shadow: 24px;
  color: white;
  padding: 1px;

  @media only screen and (min-width: 820px) {
    width: 60%;
    height: 85%;
    margin: 6% 0% 6% 25%;
    ul {
      flex-direction: row;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  height: 100%;

  img {
    width: 50%;
    margin-top: 5%;
  }
  h1 {
    font-size: 150%;
  }

  span {
    margin: 0;
  }

  @media only screen and (min-width: 555px) {
    img {
      width: 20%;
    }
  }
`;

export const AllQuestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
`;

export const QuestContainer = styled.div`
  width: 100%;
  height: 100%;
  /* margin: 3% 7% 10% 7%; */
  /* padding: 2% 7% 2% 7%; */
  border-radius: 4px;
  p {
    margin: 0% 0% 0% 0%;
    padding: 3% 4% 3% 4%;
    width: 100%;
    font-size: 90%;
  }
  a {
    text-decoration: none;
    color: white;
  }

  :hover {
    background-color: white;
    a {
      color: black;
    }
  }
`;

export const WppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin: 7% 0% 0% 0%;
  span {
    padding-left: 6%;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

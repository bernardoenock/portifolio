import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

export const ContainerAll = styled.div`
  p {
    font-family: "Pixel Text";
    font-size: 70px;
    color: #14004a;
    margin-top: -15px;
  }
`;

export const ContactsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;

  margin: 10% 0% 3% 20%;
  a {
    text-decoration: none;
    color: white;
    margin-left: 1.5%;
  }
`;

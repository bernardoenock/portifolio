import React from "react";
//Styles
import { Container, ContainerLabelMeTxt } from "./styles";

import { Avatar } from "@mui/material";

import imgAvatar from "../../../../assets/img/perfil_boneco02.jpg";

export default function LabelMe() {
  return (
    <Container>
      <Avatar
        alt="Nock Nock"
        src={imgAvatar}
        sx={{ width: 66, height: 66 }}
      ></Avatar>
      <ContainerLabelMeTxt>
        <h3>Bernardo Enock</h3>
        <p>Café ☕️, sopas de letrinhas 👨‍💻 e Ciência 🧩</p>
        <p></p>
      </ContainerLabelMeTxt>
    </Container>
  );
}

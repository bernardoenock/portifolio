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
        <p>Estudante que gosta de artes: tecnologicas, orgânicas e binárias.</p>
        <p></p>
      </ContainerLabelMeTxt>
    </Container>
  );
}

import React from "react";
import MenuMobile from "./MenuMobile";
import { Container, ContainerLogo, IconMenuMobile } from "./styles";

export default function Header() {
  return (
    <Container>
      <ContainerLogo>
        <h1>ENOCK</h1>
      </ContainerLogo>

      <IconMenuMobile>{/* <MenuMobile /> */}</IconMenuMobile>
    </Container>
  );
}

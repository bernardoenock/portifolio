import React from "react";

import LabelMe from "./LabelMe";
import Labels from "./Labels";
import { Container, ContainerGrade, DivLine } from "./styles";

export default function Main() {
  return (
    <Container>
      <ContainerGrade>
        <DivLine>
          <LabelMe />
          <Labels labelTitle={"Status"} />
          <Labels labelTitle={"Works"} />
          <Labels labelTitle={"Contacts"} />
        </DivLine>
      </ContainerGrade>
    </Container>
  );
}

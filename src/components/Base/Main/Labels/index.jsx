import React from "react";
import { Container, ContainerTitle } from "./styles";

import Status from "../Modals/Status";
import Works from "../Modals/Workrs";
import Contacts from "../Modals/Contacts";

export default function Labels({ labelTitle }) {
  return (
    <>
      <Container>
        <ContainerTitle>
          {labelTitle === "Status" ? (
            <>
              <Status />
            </>
          ) : (
            <></>
          )}
          {labelTitle === "Works" ? (
            <>
              <Works />
            </>
          ) : (
            <></>
          )}
          {labelTitle === "Contacts" ? (
            <>
              <Contacts />
            </>
          ) : (
            <></>
          )}
        </ContainerTitle>
      </Container>
    </>
  );
}

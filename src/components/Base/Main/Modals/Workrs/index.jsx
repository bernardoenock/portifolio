import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

import DownloadIcon from "@mui/icons-material/Download";

import iconPC from "../../../../../assets/img/conquistas/software_icon.png";

import {
  Container,
  ContainerAll,
  BoxContainer,
  QuestContainer,
  AllQuestContainer,
  WppContainer,
} from "./styles";

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ContainerAll>
      <Button onClick={handleOpen}>
        <p>jobs</p>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <BoxContainer>
            <Container>
              <img alt="Computador pixel" src={iconPC} />
              <h1>O que ando fazendo:</h1>
              <AllQuestContainer>
                <QuestContainer>
                  <p>
                    <a
                      href="https://www.youtube.com/channel/UCKlFVP-AwhYlGvP0VXdtR6w"
                      target="_blank"
                    >
                      -> Compartilhando trajetoria de carreira.
                    </a>
                  </p>
                </QuestContainer>
                <QuestContainer>
                  <p>
                    <a
                      href="https://fundacao-estudar.myedools.com/cc50-o-curso-de-ciencia-da-computacao-de-harvard"
                      target="_blank"
                    >
                      -> Cursando CS50 da fundação estudar, curso livre de
                      ciências da computação de Harvard.
                    </a>
                  </p>
                </QuestContainer>
                <QuestContainer>
                  <p>
                    <a href="https://github.com/bernardoenock" target="_blank">
                      -> Reformando projetos e portifolio
                    </a>
                  </p>
                </QuestContainer>
              </AllQuestContainer>
              <WppContainer>
                <a
                  href="https://www.canva.com/design/DAE_NoV_KBg/3CrZFA1q-CAEnnpKA6329A/view?website#1"
                  target="_blank"
                >
                  <span>Visualizar Currículo</span>
                </a>
              </WppContainer>
            </Container>
          </BoxContainer>
        </Fade>
      </Modal>
    </ContainerAll>
  );
}

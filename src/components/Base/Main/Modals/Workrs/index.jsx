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
              <h1>FASE 1 - Open To Work</h1>
              <AllQuestContainer>
                <QuestContainer>
                  <p>
                    <a
                      href="https://bvr.li/clique/MR703081JNCO"
                      target="_blank"
                    >
                      -> Trabalhando como coach, auxiliando alunos na Kenzie
                      Acadey Brasil, onde tambem estudo.
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
                    <a
                      href="https://www.instagram.com/bernardoenock/"
                      target="_blank"
                    >
                      -> Tempo livre, produzindo conteúdos digitais e
                      trabalhando na fase 2 do portfólio.
                    </a>
                  </p>
                </QuestContainer>

                <QuestContainer>
                  <p>
                    <a
                      href="https://www.instagram.com/eutofilmando/"
                      target="_blank"
                    >
                      -> Sócio do @eutofilmando.
                    </a>
                  </p>
                </QuestContainer>
              </AllQuestContainer>
              <WppContainer>
                <DownloadIcon sx={{ fontSize: 30 }} />
                <a
                  href="src/assets/curriculo/curriculo.pdf"
                  download="curriculo.pdf"
                  target="_blank"
                >
                  <span>Baixar Currículo</span>
                </a>
              </WppContainer>
            </Container>
          </BoxContainer>
        </Fade>
      </Modal>
    </ContainerAll>
  );
}

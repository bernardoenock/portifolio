import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

import { Avatar } from "@mui/material";

import {
  BoxContainer,
  Conquistas,
  Container,
  ContainerAll,
  ImgContainer,
  TxtContainer,
  TxtContainerAll,
  TxtContainerB,
  TxtContainerImg,
} from "./styles";

import imgUrl from "../../../../../assets/img/foto_eu.jpg";

import iconCSS from "../../../../../assets/img/conquistas/CSS_icon.png";
import iconHTML from "../../../../../assets/img/conquistas/HTML_icon.png";
import iconJS from "../../../../../assets/img/conquistas/JS_icon.png";
import iconSQL from "../../../../../assets/img/conquistas/SQL_icon.png";
import iconOS from "../../../../../assets/img/conquistas/OS_icon.png";
import iconReact from "../../../../../assets/img/conquistas/react_icon.png";
import iconOOP from "../../../../../assets/img/conquistas/oop_icon.png";
import iconGit from "../../../../../assets/img/conquistas/GIT_fLow_icon.png";
export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ContainerAll>
      <Button onClick={handleOpen}>
        <p>Status</p>
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
              <TxtContainerImg>
                <Avatar
                  alt="Eu"
                  src={imgUrl}
                  sx={{ border: "2px solid #ffffff", width: 151, height: 151 }}
                  variant="rounded"
                ></Avatar>
                <TxtContainer>
                  <h3>SOBRE MIM</h3>
                  <p>Oi, eu sou Enock!</p>
                  <p>
                    Formado em informática básica no ensino médio, amante da
                    tecnologia, produtor digital e artista!
                  </p>
                </TxtContainer>
              </TxtContainerImg>

              <TxtContainerB>
                <p>
                  Vejo a vida como um "jogo" e busco encarar as fases desse jogo
                  da melhor forma e tentando fazer a diferença.
                </p>
                <p>
                  Nesse jogo tenho apenas 1 vida, acertando ou errando, o meu
                  objetivo principal é passar pelos obstáculos e chegar cada vez
                  mais longe.
                </p>
                <p>
                  Resolver problemas é o que me move. Amo criar, planejar,
                  resolver e fazer acontecer.
                </p>
                <p>
                  Atualmente estudo programação, estou finalizando meu curso de
                  Full Stack na Kenzie Academy, onde a paixão por programação
                  começou, pretendo me especializar em IA, estudar tecnologias
                  úteis e ágeis, participar de projetos, trabalhar em empresas
                  de tecnologia e fazer de tudo que estiver ao meu alcance para
                  ajudar de alguma forma, esse mundo...
                </p>
              </TxtContainerB>
              <Conquistas>
                <Avatar
                  alt="Eu"
                  src={iconCSS}
                  sx={{
                    border: "2px solid #0008ff",
                    bgcolor: "white",
                    width: 61,
                    height: 61,
                  }}
                  className="icon"
                ></Avatar>
                <Avatar
                  alt="Eu"
                  src={iconHTML}
                  sx={{
                    border: "2px solid #0008ff",
                    bgcolor: "white",
                    width: 61,
                    height: 61,
                  }}
                  className="icon"
                ></Avatar>
                <Avatar
                  alt="Eu"
                  src={iconJS}
                  sx={{
                    border: "2px solid #0008ff",
                    bgcolor: "white",
                    width: 61,
                    height: 61,
                  }}
                  className="icon"
                ></Avatar>
                <Avatar
                  alt="Eu"
                  src={iconSQL}
                  sx={{
                    border: "2px solid #0008ff",
                    bgcolor: "white",
                    width: 61,
                    height: 61,
                  }}
                  className="icon"
                ></Avatar>
                <Avatar
                  alt="Eu"
                  src={iconOS}
                  sx={{
                    border: "2px solid #0008ff",
                    bgcolor: "white",
                    width: 61,
                    height: 61,
                  }}
                  className="icon"
                ></Avatar>
                <Avatar
                  alt="Eu"
                  src={iconReact}
                  sx={{
                    border: "2px solid #0008ff",
                    bgcolor: "white",
                    width: 61,
                    height: 61,
                  }}
                  className="icon"
                ></Avatar>
                <Avatar
                  alt="Eu"
                  src={iconOOP}
                  sx={{
                    border: "2px solid #0008ff",
                    bgcolor: "white",
                    width: 61,
                    height: 61,
                  }}
                  className="icon"
                ></Avatar>
                <Avatar
                  alt="Eu"
                  src={iconGit}
                  sx={{
                    border: "2px solid #0008ff",
                    bgcolor: "white",
                    width: 61,
                    height: 61,
                  }}
                  className="icon"
                ></Avatar>
              </Conquistas>
            </Container>
          </BoxContainer>
        </Fade>
      </Modal>
    </ContainerAll>
  );
}

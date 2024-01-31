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
                </TxtContainer>
              </TxtContainerImg>

              <TxtContainerB>
                <p>
                Com meu café, minhas sopas de letrinhas e com minha paixão incansável pela ciência, 
                encontro minha motivação em desvendar desafios complexos no digital e na vida. 
                Sou um entusiasta dedicado ao estudo contínuo, movido pela emoção de criar, planejar e concretizar ideias inovadoras. 
                </p>
                <p>
                  Resolver problemas é minha missão, e transformá-los em soluções é minha maior recompensa. Amo criar, planejar,
                  resolver e fazer acontecer.
                </p>
                <p>
                Habilidades em Design System, JavaScript, CSS, React, Next, TDD, Node, Docker, Python, noSQL, graphQL,  PHP,  GitFlow,  inglês intermediário e espanhol básico.
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

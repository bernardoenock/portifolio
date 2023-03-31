import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

import { Container, ContainerAll, ContactsContainer } from "./styles";

import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 400,
  bgcolor: "#000",
  border: "4px solid #ffffff",
  boxShadow: 24,
  color: "white",
  p: 1,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ContainerAll>
      <Button onClick={handleOpen}>
        <p>Contacts</p>
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
          <Box sx={style}>
            <Container>
              <h1>Find me in</h1>
              <ContactsContainer>
                <GitHubIcon />
                <a href="https://github.com/bernardoenock" target="_blank">
                  <p>GitHub</p>
                </a>
              </ContactsContainer>

              <ContactsContainer>
                <MailOutlineIcon />
                <a href="#">
                  <p>enockltda@gmail.com</p>
                </a>
              </ContactsContainer>

              <ContactsContainer>
                <LinkedInIcon />
                <a
                  href="https://www.linkedin.com/in/bernardoenock/"
                  target="_blank"
                >
                  <p>bernardoenock</p>
                </a>
              </ContactsContainer>

              <ContactsContainer>
                <InstagramIcon />
                <a href="https://www.instagram.com/enock.dev/" target="_blank">
                  <p>enock.dev</p>
                </a>
              </ContactsContainer>
            </Container>
          </Box>
        </Fade>
      </Modal>
    </ContainerAll>
  );
}

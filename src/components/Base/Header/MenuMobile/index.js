import React from "react";
import { Button, Menu, MenuItem } from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";

import { StylesProvider } from "@material-ui/core/styles";
import "./styles.css";

export default function MenuMobile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StylesProvider injectFirst>
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuIcon sx={{ fontSize: 40 }} className="Icon-Menu-Styled" />
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          className="MenuStyled"
        >
          <MenuItem onClick={handleClose}>Status</MenuItem>
          <MenuItem onClick={handleClose}>Works</MenuItem>
          <MenuItem onClick={handleClose}>Projects</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Menu>
      </div>
    </StylesProvider>
  );
}

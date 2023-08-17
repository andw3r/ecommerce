import useAuthStore from "@/store/authStore";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import { FaRegUser } from "react-icons/fa6";

const User = () => {
  const { logout } = useAuthStore();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // clears the token / logout
  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <Box
        component="button"
        sx={{
          color: "#fff",
          cursor: "pointer",
          background: "none",
          border: "none",
        }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <FaRegUser fontSize="22px" />
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleLogout}>Вийти</MenuItem>
      </Menu>
    </div>
  );
};

export default User;

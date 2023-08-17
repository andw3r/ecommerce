import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavLogo = () => {
  const Logo: string = "Logo";
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Box sx={{ fontSize: "28px", color: "text.primary" }}>{Logo}</Box>
    </Link>
  );
};

export default NavLogo;

import { HeaderSize } from "@/theme";
import { AppBar } from "@mui/material";
import NavList from "./NavList";
import NavLogo from "./NavLogo";

const NavBar = () => {
  return (
    <>
      <AppBar
        component="header"
        sx={{
          position: { xs: "relative", sm: "fixed" },
          zIndex: 10,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: {
            xs: `${HeaderSize.xs}px`,
            sm: `${HeaderSize.sm}px`,
            md: `${HeaderSize.md}px`,
            lg: `${HeaderSize.lg}px`,
            xl: `${HeaderSize.xl}px`,
          },
          backgroundColor: "background.header",
          px: { xs: "10px", sm: "15px", md: "25px", lg: "35px" },
        }}
      >
        {/* Logo */}
        <NavLogo />
        {/* responsive menu */}
        <NavList />
      </AppBar>
    </>
  );
};

export default NavBar;

import { Box, Stack, Typography } from "@mui/material";
import Cart from "./Cart";
import SearchBar from "./SearchBar";
import Likes from "./Likes";
import User from "./User";
import { HiBars3 } from "react-icons/hi2";
import useAuthStore from "@/store/authStore";

const NavList = () => {
  const { activePopup, setActivePopup, isAuthUser } = useAuthStore();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={{ xs: "15px", sm: "20px", md: "30px" }}
          sx={{ alignItems: "center" }}
        >
          {isAuthUser ? (
            <>
              {/* Likes */}
              <Likes />
              {/* User */}
              <User />
            </>
          ) : (
            <Typography
              sx={{ cursor: "pointer", p: "5px" }}
              onClick={() => {
                setActivePopup(!activePopup);
              }}
            >
              Увійти
            </Typography>
          )}
          <Cart />
        </Stack>
        {/* Search-bar */}
        <SearchBar />
        {/* <Box sx={{ display: { xs: "flex", sm: "none" }, alignItems: "center" }}>
        <HiBars3 fontSize="32px" />
      </Box> */}
      </Box>
    </>
  );
};

export default NavList;

import { Box } from "@mui/material";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const ItemLikeButton = () => {
  const [liked, setLiked] = useState<boolean>(false);
  // const [isAuthUser, upadateIsAuthUser] = useAuthStore((state) => [
  // state.isAuthUser,
  // state.upadateIsAuthUser,
  // ])

  // const PopupOpen = () => {
  //   upadateIsAuthUser(!isAuthUser);
  // };

  // const token = useAuthStore((state) => state.accessToken);
  // const setToken = useAuthStore((state) => state.refreshToken);

  return (
    <Box
      sx={{
        cursor: "pointer",
        position: "absolute",
        zIndex: 2,
        top: "15px",
        left: "15px",
        p: "5px",
        borderRadius: "5px",
        backgroundColor: "rgb(18,18,18,0.6)",
        "&:hover": { backgroundColor: "rgb(18,18,18,0.8)" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "ease 0.1s",
      }}
      onClick={() => {
        // !token ? PopupOpen() : setLiked(!liked);
      }}
    >
      {liked ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
    </Box>
  );
};

export default ItemLikeButton;

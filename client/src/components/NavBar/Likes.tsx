import { Box } from "@mui/material";
import { FaHeart } from "react-icons/fa6";

const Likes = () => {
  return (
    <Box sx={{ cursor: "pointer" }}>
      <FaHeart fontSize="22px" />
    </Box>
  );
};

export default Likes;

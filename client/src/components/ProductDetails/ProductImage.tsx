import { Box } from "@mui/material";
import suit from "@assets/img/suit.webp";

const ProductImage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minWidth: "450px",
        height: "450px",
        display: "block",
        borderRadius: "5px",
      }}
    >
      <img
        src={suit}
        alt="product image"
        style={{
          position: "absolute",
          objectFit: "cover",
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </Box>
  );
};

export default ProductImage;

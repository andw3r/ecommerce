import { Box, Typography } from "@mui/material";
import React from "react";

const ProductButton = () => {
  return (
    <Box
      sx={{
        width: "fit-content",
        px: "10px",
        py: "5px",
        backgroundColor: "button.productInfo",
        borderRadius: "2px",
        cursor: "pointer",
      }}
    >
      <Typography sx={{}}>Add to cart</Typography>
    </Box>
  );
};

export default ProductButton;

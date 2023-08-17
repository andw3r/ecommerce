import { Divider, Stack, Typography } from "@mui/material";
import ProductButton from "./ProductButton";

const ProductInfo = () => {
  return (
    <Stack spacing="15px" sx={{ width: "100%" }}>
      <Typography variant="h2" sx={{ mt: "30px" }}>
        Product Name
      </Typography>
      <Typography variant="h6">Price: $30.00</Typography>
      <Divider />
      <Typography variant="h6">Size: M</Typography>
      <Typography variant="h6">Color: White</Typography>
      <ProductButton />
    </Stack>
  );
};

export default ProductInfo;

import ProductImage from "../components/ProductDetails/ProductImage";
import ProductInfo from "../components/ProductDetails/ProductInfo";
import { Stack } from "@mui/material";

export default function Product() {
  return (
    <>
      <Stack direction="row" spacing="40px" sx={{ width: "100%" }}>
        <ProductImage />
        <ProductInfo />
      </Stack>
    </>
  );
}

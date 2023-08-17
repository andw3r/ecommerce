import { Grid, Paper, Typography, Box, Stack } from "@mui/material";
import ItemLikeButton from "./ItemLikeButton";
import { Link } from "react-router-dom";
import suit from "@/assets/img/suit.webp";

const ProductsList = () => {
  return (
    <Grid
      container
      spacing={{ xs: "15px", sm: "20px", lg: "25px", xl: "30px" }}
    >
      <Grid item xs={12} sm={6} md={4} xl={3}>
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          {/* like button */}
          <ItemLikeButton />
          <Link
            to="/product"
            style={{ textDecoration: "none", height: "100%" }}
          >
            <Paper
              sx={{
                p: "10px",
                width: "100%",
                height: "100%",
              }}
            >
              {/* image */}
              <Box
                sx={{
                  overflow: "hidden",
                  borderRadius: "5px",
                  width: "100%",
                  height: {
                    xs: "100vw",
                    sm: "220px",
                    md: "250px",
                    lg: "300px",
                  },
                }}
              >
                <img
                  src={suit}
                  alt="product image"
                  style={{
                    userSelect: "none",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
              {/* text */}
              <Stack direction="column" spacing="15px" sx={{ mt: "10px" }}>
                <Typography variant="h5" sx={{ userSelect: "none" }}>
                  Product Name Product
                </Typography>

                <Typography variant="subtitle1">50.00$</Typography>
              </Stack>
            </Paper>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductsList;

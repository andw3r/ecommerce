import { Box, Typography } from "@mui/material";
import { BsCart4 } from "react-icons/bs";
import React, { useState } from "react";

const Cart = () => {
  const [counter, setCounter] = useState<number>(1);
  // const decrement = () => {
  //   counter !== 0 && setCounter(counter - 1);
  //   console.log(counter);
  // };
  // const increment = () => {
  //   setCounter(counter + 1);
  // };
  return (
    <Box sx={{ p: "2px", position: "relative", cursor: "pointer" }}>
      <BsCart4 fontSize="28px" />
      {/* cart counter */}
      {counter > 0 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            content: '""',
            top: "0px",
            right: "-3px",
            width: "20px",
            height: "20px",
            borderRadius: "20px",
            backgroundColor: "text.orange",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>{counter}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Cart;

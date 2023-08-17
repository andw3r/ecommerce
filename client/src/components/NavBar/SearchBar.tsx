import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

const SearchBar = () => {
  const [activeSearchBar, setActiveSearchBar] = useState<boolean>(false);
  const searchBarToggle = () => {
    setActiveSearchBar(!searchBarToggle);
  };

  return (
    <>
      <Stack
        direction="row"
        sx={{
          position: { xs: "absolute", sm: "relative" },
          alignItems: "center",
          left: { xs: "50%", sm: "0" },
          bottom: { xs: "-55px", sm: 0 },
          transform: { xs: "translate(-50%, 0%)", sm: "translate(0,0)" },
          width: { xs: "95%", sm: "100%" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "button.header",
            borderRadius: "8px",
            px: "4px",
            py: "8px",
            right: "-2px",
            cursor: "pointer",
          }}
        >
          <Typography variant="button">Знайти</Typography>
        </Box>

        <Box
          component="input"
          placeholder="Пошук товару"
          sx={{
            width: { xs: "100%", sm: "250px", md: "440px", lg: "550px" },
            ml: { sm: "25px" },
            pl: "10px",
            pr: "35px",
            py: "12px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
          }}
        />
      </Stack>
    </>
  );
};

export default SearchBar;

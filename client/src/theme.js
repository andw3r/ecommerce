import { createTheme } from "@mui/material";
// Size of the Header/Розмір шапки
export const HeaderSize = {
  xs: 80,
  sm: 80,
  md: 80,
  lg: 80,
  xl: 80,
};

export const theme = createTheme({
  palette: {
    type: "dark",
    // // primary: {
    // //   main: "",
    // //   light: "#a9afc1",
    // },
    // secondary: {
    //   main: "#f50057",
    // },
    background: {
      paper: "#121212",
      header: "#111214",
      default: "#0a0a0a",
    },
    text: {
      primary: "#dadada",
      secondary: "#ADADAD",
      black: "#000000",
      disabled: "#505050",
      orange: "#bf6132",
    },
    // action:{},
    divider: "#505050",
    button: {
      header: "#212121",
      productInfo: "#212121",
      register: "#bf6132",
    },
  },
  typography: {
    // fontFamily: poppins.style.fontFamily,
    h1: {
      fontSize: "4rem", // 64px
    },
    h2: {
      fontSize: "3rem", // 48px
    },
    h3: {
      fontSize: "2.5rem", // 40px
    },
    h4: {
      fontSize: "2rem", // 32px
    },
    h5: {
      fontSize: "1.5rem",
    },
    h6: {
      fontSize: "1.25rem",
    },
    subtitle1: {
      fontSize: "1rem",
    },
    button: {
      fontSize: "0.75rem",
    },
  },
});
// breakpoints
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

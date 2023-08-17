import NavBar from "@/components/NavBar";
import PopupAuth from "@/components/PopupAuth";
import { HeaderSize } from "@/theme";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUserInfo } from "@/api/UserData";

const RootLayout = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserInfo();
        setUserInfo(data);
      } catch (error: any) {
        console.error("Error fetching user info:", error.message);
      }
    };

    getUserData();
  }, []);

  console.log(userInfo);

  return (
    <Box component="body" sx={{ boxSizing: "border-box" }}>
      {/* auth popup */}
      <PopupAuth />
      <NavBar />
      <Container
        sx={{
          mt: {
            xs: `${HeaderSize.xs + 10}px`,
            sm: `${HeaderSize.sm + 20}px`,
            md: `${HeaderSize.md + 20}px`,
            lg: `${HeaderSize.lg + 20}px`,
            xl: `${HeaderSize.xl + 20}px`,
          },
        }}
        fixed={true}
        maxWidth="xl"
      >
        <Outlet />
      </Container>
    </Box>
  );
};

export default RootLayout;

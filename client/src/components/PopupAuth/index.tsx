import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Stack,
  IconButton,
  Typography,
  DialogActions,
  Divider,
} from "@mui/material";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import useAuthStore from "@/store/authStore";

const PopupAuth: React.FC = () => {
  const {
    activePopup,
    setActivePopup,
    isAuthUser,
    updateIsAuthUser,
    login,
    signup,
    logout,
  } = useAuthStore();

  // check if user wants to login or signup
  const [isLogin, setIsLogin] = useState<boolean>(false);

  // user's credentials
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // password type toggler
  type PasswordType = "password" | "text";
  const [passwordType, setPasswordType] = useState<PasswordType>("text");

  // Dialog closer
  const handleClose = () => {
    setActivePopup(false);
  };

  // form toggler
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // send user's credentials to the server / auth
  const handleSubmit = async () => {
    try {
      if (isLogin) {
        login(email, password);
        handleClose();
      } else {
        signup(name, email, password);
        handleClose();
      }
    } catch (error: any) {
      console.error("Authentication Error:", error.message);
    }
  };



  // send user's credentials on pressing the enter key
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <Dialog
        open={activePopup}
        onClose={handleClose}
        sx={{ overflowY: "auto" }}
        PaperProps={{
          style: { backgroundColor: "#111214" },
        }}
      >
        <DialogTitle sx={{ pb: "10px" }}>
          <Typography variant="h6">
            {isLogin ? "Вхід" : "Реєстрація"}
          </Typography>

          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "#ccc",
            }}
          >
            <FaTimes />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Stack spacing={2} sx={{ mb: "10px" }}>
            {!isLogin && (
              <TextField
                sx={{
                  borderColor: "red",
                }}
                label="Ім'я"
                fullWidth
                required
                // color="primary"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={handleKeyDown} // Close on Enter for the Name field
              />
            )}
            <TextField
              label="Ел. пошта"
              type="email"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown} // Close on Enter for the Email field
            />
            <TextField
              label="Пароль"
              type={passwordType}
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown} // Close on Enter for the Password field
            />
          </Stack>

          <Typography
            variant="button"
            sx={{
              cursor: "pointer",
              color: "#a9afc1",
              textDecoration: "underline",
            }}
            onClick={toggleForm}
          >
            {isLogin ? "Зареєструватися" : "Я вже зареєстрований"}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            onClick={handleSubmit}
            sx={{ width: "100%", backgroudColor: "button.register" }}
          >
            {isLogin ? "Увійти" : "Зареєструватися"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PopupAuth;

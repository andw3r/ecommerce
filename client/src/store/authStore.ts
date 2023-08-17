import axios from "axios";
import create from "zustand";
import AuthState from "@/types/AuthTypes";

const useAuthStore = create<AuthState>((set) => {
  const storedToken = localStorage.getItem("accessToken");
  const storedIsAuthUser = Boolean(storedToken);

  return {
    // values
    activePopup: false,
    setActivePopup: (activePopup) => set({ activePopup }),
    isAuthUser: storedIsAuthUser,
    token: storedToken,

    // actions
    // setUserId: (userId) => set({ userId }),
    updateIsAuthUser: (isAuthUser) => {
      set({ isAuthUser });
      localStorage.setItem("isAuthUser", String(isAuthUser));
    },
    setToken: (accessToken, refreshToken) => {
      set({ token: accessToken, isAuthUser: true });
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      // Зберігання даних аутентифікації в Session Storage
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("isAuthUser", "true"); // Update localStorage
    },
    logout: () => {
      set({ token: null, isAuthUser: false });
      delete axios.defaults.headers.common.Authorization;

      // Remove data from Session Storage
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },

    login: async (email, password) => {
      try {
        const response = await axios.post("/api/auth/login", {
          email,
          password,
        });

        const { accessToken, refreshToken } = response.data;

        set({ token: accessToken, isAuthUser: true });

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("isAuthUser", "true"); // Update localStorage
      } catch (error: any) {
        console.error("Login Error:", error.message);
      }
    },

    signup: async (name, email, password) => {
      try {
        const response = await axios.post("/api/auth/register", {
          name,
          email,
          password,
        });

        const { accessToken, refreshToken } = response.data;
        set({ token: accessToken, isAuthUser: true });
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("isAuthUser", "true"); // Update localStorage
      } catch (error: any) {
        console.error("Signup Error:", error.message);
      }
    },
  };
});

export default useAuthStore;

interface AuthState {
  // popup action
  activePopup: boolean;
  setActivePopup: (activePopup: boolean) => void;
  // if user is logged in
  isAuthUser: boolean;
  updateIsAuthUser: (isAuthUser: boolean) => void;
  //token
  token: string | null;
  setToken: (accessToken: string, refreshToken: string) => void;
  // auth actions
  logout: () => void;
  login: (email: string, password: string) => void;
  signup: (name: string, email: string, password: string) => void;
}

export default AuthState;

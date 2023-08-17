import jwtDecode from "jwt-decode";

export const getUserIdFromToken = (token: string): string | null => {
  console.log("token:", token);
  try {
    const decodedToken = jwtDecode<{ userId: string }>(token);
    return decodedToken.userId || null;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

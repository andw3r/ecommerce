import axios from "axios";
import { getUserIdFromToken } from "@/utils/getUserId";

export const fetchUserInfo = async () => {
  try {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      throw new Error("Access token not found");
    }

    const userId = getUserIdFromToken(token);

    if (!userId) {
      throw new Error("Unable to get user ID from token");
    }

    const response = await axios.get(`/api/user/info/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
};

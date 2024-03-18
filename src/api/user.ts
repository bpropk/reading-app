import { GetToken } from "@src/utils/storage";
import axios from "axios";

export const userLibrary = async () => {
  const config = {
    headers: { Authorization: `Bearer ${await GetToken()}` },
  };
  return axios.get(`${process.env.API_URL}/user/library`, config);
};

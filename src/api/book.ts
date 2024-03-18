import { GetToken } from "@src/utils/storage";
import axios from "axios";

export const listBooks = async (subject?: string) => {
  const config = {
    headers: { Authorization: `Bearer ${await GetToken()}` },
  };

  return axios.get(`${process.env.API_URL}/book/list/`, config);
};

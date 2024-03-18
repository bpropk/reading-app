import { GetToken } from "@src/utils/storage";
import axios from "axios";

interface addLibraryDto {
  id?: string;
}

export const listBooks = async (subject?: string) => {
  const config = {
    headers: { Authorization: `Bearer ${await GetToken()}` },
    params: {
      subject,
    },
  };

  return axios.get(`${process.env.API_URL}/book/list/`, config);
};

export const bookDetail = async (id?: string) => {
  const config = {
    headers: { Authorization: `Bearer ${await GetToken()}` },
  };
  return axios.get(`${process.env.API_URL}/book/detail/${id}`, config);
};

export const addLibrary = async (body: addLibraryDto) => {
  const config = {
    headers: { Authorization: `Bearer ${await GetToken()}` },
  };
  return axios.post(`${process.env.API_URL}/book/add`, body, config);
};

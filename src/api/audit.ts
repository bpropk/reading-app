import { GetToken } from "@src/utils/storage";
import axios from "axios";

interface generateAuditDto {
  bookId?: string;
  location?: string;
}

export const GenerateAuditAPI = async (body: generateAuditDto) => {
  const config = {
    headers: { Authorization: `Bearer ${await GetToken()}` },
  };

  return axios.post(`${process.env.API_URL}/book/audit`, body, config);
};

export const getAuditAPI = async (bookId?: string) => {
  const config = {
    headers: { Authorization: `Bearer ${await GetToken()}` },
  };
  return axios.get(`${process.env.API_URL}/book/audit/${bookId}`, config);
};

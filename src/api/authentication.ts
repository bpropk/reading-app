import axios from "axios";

interface loginDto {
  username?: string;
  password?: string;
}

export const login = async (body: loginDto) => {
  return axios.post(`${process.env.API_URL}/auth/login`, body);
};

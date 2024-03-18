import axios from "axios";

export const bookDetail = async () => {
  return axios.get(`${process.env.API_URL}/book/detail`);
};

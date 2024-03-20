import { GetToken } from "@src/utils/storage";
import axios from "axios";

interface addLibraryDto {
  id?: string;
}

interface addReviewDto {
  comment?: string;
  star?: number;
  bookId?: string;
}

interface likeReviewDto {
  reviewId: string;
}

axios.interceptors.response.use(
  function (response) {
    // Optional: Do something with response data
    return response;
  },
  function (error) {
    if (error.response.data.message === "Invalid Token") {
      // RemoveAllStorage();
    }
    // Do whatever you want with the response error here:

    // But, be SURE to return the rejected promise, so the caller still has
    // the option of additional specialized handling at the call-site:
    return Promise.reject(error);
  }
);

// Book
export const ListBooksAPI = async (subject?: string) => {
  const config = {
    headers: { Authorization: `Bearer ${await GetToken()}` },
    params: {
      subject,
    },
  };

  return axios.get(`${process.env.API_URL}/book/list/`, config);
};

export const BookDetailAPI = async (id?: string) => {
  const config = {
    headers: { Authorization: `Bearer ${await GetToken()}` },
  };
  return axios.get(`${process.env.API_URL}/book/detail/${id}`, config);
};

export const AddLibraryAPI = async (body: addLibraryDto) => {
  const config = {
    headers: { Authorization: `Bearer ${await GetToken()}` },
  };
  return axios.post(`${process.env.API_URL}/book/add`, body, config);
};

// Review
export const AddReviewAPI = async (body: addReviewDto) => {
  const config = {
    headers: { Authorization: `Bearer ${await GetToken()}` },
  };
  return axios.post(`${process.env.API_URL}/book/review`, body, config);
};

export const LikeReviewAPI = async (body: likeReviewDto) => {
  const config = {
    headers: { Authorization: `Bearer ${await GetToken()}` },
  };

  return axios.post(`${process.env.API_URL}/book/review/like`, body, config);
};

export const AllReviewAPI = async (bookId?: string) => {
  const config = {
    headers: { Authorization: `Bearer ${await GetToken()}` },
  };
  return axios.get(`${process.env.API_URL}/book/review/${bookId}`, config);
};

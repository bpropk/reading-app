import axios from "axios";

interface loginDto {
  username?: string;
  password?: string;
}

interface registerDto {
  name?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  username?: string;
  password?: string;
}

interface forgotPasswordDto {
  email?: string;
}

interface changePasswordDto {
  token?: string;
  newPassword?: string;
}

export const login = async (body: loginDto) => {
  return axios.post(`${process.env.API_URL}/auth/login`, body);
};

export const register = async (body: registerDto) => {
  return axios.post(`${process.env.API_URL}/auth/register`, body);
};

export const forgotPassword = async (body: forgotPasswordDto) => {
  return axios.post(`${process.env.API_URL}/auth/forgot-password`, body);
};

export const changePassword = async (body: changePasswordDto) => {
  return axios.post(`${process.env.API_URL}/auth/change-password`, body);
};
